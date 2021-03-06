import express, { response } from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import userRouter from "./userRouter.js";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());
//app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',userRouter);

const connectDB = async () => {

    try{
        
        await mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                //useCreateIndex: true
            },
            ()=>{
                console.log("Database Connected Successfully!!!");
            }
        )

    }

    catch(error)
    {
        console.log("Faild to connect to MongoDB ", error);
    }

}

connectDB();


app.use(express.static('public'))

app.get(
    "/",
    (req,res)=>{
        res.sendFile(__dirname + "/public/index.html");
    }
);


app.listen(
    port,
    ()=>{

        console.log(`Server started on port ${port} `);
    }
)

