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

const storage = diskStorage({
    destination: "./upload/images",
    filename: (req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
})
app.use("/upload",express.static("./upload"))

app.post("/upload",upload.single('product'),(req,res)=>{
    // console.log(req.files);
    // console.log(req.body);
    res.json({
        success:1,
        image_url:`http://localhost:${process.env.PORT}/upload/images/${req.file.filename}`
    })
});

app.use("/user",userRoutes)

import productRouter from "./routes/productRoutes.js";
app.use("/product",productRouter)



export default app