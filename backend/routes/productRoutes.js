const express = require("express");

const router = express.Router();
const {add_product,deleteProduct, getProduct} = require("../controllers/productController");


router.post("/add_product",add_product)
router.get("/getProduct",getProduct)
router.delete("/deleteProduct/:id",deleteProduct)
module.exports = router