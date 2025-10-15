import moongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema=new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

},{timestamps:true})


UserSchema.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password)
}

const User=moongoose.model("User",UserSchema)

export default User;