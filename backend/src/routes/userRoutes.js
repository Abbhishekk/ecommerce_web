import { Router } from "express";

const userRoutes = Router();
import { login, signup } from "../controllers/userControllers.js";


userRoutes.get("/login",login)
userRoutes.get("/signup",signup)

export default userRoutes