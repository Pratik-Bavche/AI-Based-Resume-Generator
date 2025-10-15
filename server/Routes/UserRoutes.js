import express from 'express'
import { getUserById, loginUser, registerUser } from '../Controllers/UserController.js';
import protect from '../MiddleWare/authMiddleware.js';

const userRouter=express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/data',protect,getUserById);

export default userRouter;