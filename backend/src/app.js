import dotenv from "dotenv";
import express from "express";

import cors from "cors";
import multer, { diskStorage } from "multer";
// const bodyParser = require('body-parser');

import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000']; // Replace with your allowed origins

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Include this if you need to send cookies
};

app.use(cors(corsOptions));

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})


 


app.use("/user",userRoutes)

import productRouter from "./routes/productRoutes.js";
app.use("/product",productRouter)



export default app