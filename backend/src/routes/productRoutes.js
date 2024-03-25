import { Router } from "express";

const productRouter = Router();
import { add_product, deleteProduct, getProduct } from "../controllers/productController.js";


productRouter.post("/add_product",add_product)
productRouter.get("/getProduct",getProduct)
productRouter.delete("/deleteProduct/:id",deleteProduct)
export default productRouter