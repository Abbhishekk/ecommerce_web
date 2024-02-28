require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors =  require("cors");
const multer = require("multer");
// const bodyParser = require('body-parser');

const userRoutes = require("./routes/userRoutes");

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

const storage = multer.diskStorage({
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
    console.log(req.files);
    res.json({
        success:1,
        image_url:`http://localhost:${process.env.PORT}/upload/images/${req.file.filename}`
    })
});

app.use("/user",userRoutes)
app.use("/product",require("./routes/productRoutes"))

mongoose.connect(process.env.MONG_URI).then(()=>{
    app.listen(process.env.PORT, () => {console.log("Server started on port "+process.env.PORT)});
    
})
.catch((error)=>{
    console.log(error);
})