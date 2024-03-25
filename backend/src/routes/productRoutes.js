import { Router } from "express";
import {verifyjwt} from "../middlewares/userAuth.middleware.js"
const productRouter = Router();
import { upload } from "../middlewares/multer.middleware.js";
import { add_product, deleteProduct, getProduct } from "../controllers/productController.js";

productRouter.route("/add_product").post(
    upload.fields([
        {
            name: "product",
            maxCount: 1
        }
    ]),
   verifyjwt,
    add_product
)


productRouter.get("/getProduct",getProduct)
productRouter.delete("/deleteProduct/:id",verifyjwt,deleteProduct)
export default productRouter