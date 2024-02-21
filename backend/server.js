require("dotenv").config();
const express = require("express");


const app = express();
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
app.use("/",(req,res,next)=>{
    res.send("Hello")
})

app.listen(process.env.PORT, () => {console.log("Server started on port "+process.env.PORT)});