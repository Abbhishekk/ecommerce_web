import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const userRoutes = Router();
import { adminLogin, login, signup } from "../controllers/userControllers.js";


userRoutes.post("/login",login)
userRoutes.post("/adminlogin",adminLogin)
userRoutes.post("/signup",
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ])
    ,signup)

export default userRoutes