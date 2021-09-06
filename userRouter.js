import express from "express";
import User from "./UserModel.js";
import expressAsyncHandler from "express-async-handler";

import { dirname } from "path";
import { fileURLToPath } from "url";


const userRouter = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

userRouter.get(
    '/',
    expressAsyncHandler(async(req,res)=>{
        //res.sendFile(__dirname + "/public/signup.html");
        res.send("User Route working!!!!!")
    })
);

userRouter.post(
    "/signin",
    async(req,res)=>{

       try{
         const user = new User({

            username: req.body.username,
            password: req.body.password
         });

        const createdUser = await user.save();

        console.log(req.body);

      
        res.send({
            username: createdUser.username,
            password:createdUser.password
        })
        
       }

       catch(error){
           console.log(error);
       }
    })




export default userRouter;