import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./Configs/DB.js";
import userRouter from "./Routes/UserRoutes.js";
import resumeRouter from "./Routes/ResumeRoutes.js";
import aiRouter from "./Routes/aiRoutes.js";

const app=express();
const PORT=process.env.PORT || 3000;


//Database connection
await connectDB()


app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
   return res.send("Server is live");
})
app.use('/api/users',userRouter)
app.use('/api/Resumes',resumeRouter)
app.use('/api/ai',aiRouter)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})