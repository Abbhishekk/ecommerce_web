import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const userRoutes = Router();
import { login, signup } from "../controllers/userControllers.js";


userRoutes.get("/login",login)
userRoutes.post("/signup",
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ])
    ,signup)

export default userRoutes