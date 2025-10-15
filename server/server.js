import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./Configs/DB.js";

const app=express();
const PORT=process.env.PORT || 3000;


//Database connection
await connectDB()


app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
   return res.send("Server is live");
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})