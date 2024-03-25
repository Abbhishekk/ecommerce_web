import productModel from "../models/productModel.js";
import { Types } from "mongoose";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import  ApiError  from "../utils/APIError.js";

export const add_product = async(req,res) =>{
   
    const { name, category, new_price, old_price,  available } = req.body;
 
    if([ name, category, new_price, old_price,  available].some((field) => field?.trim() === "")
    ){
        throw new ApiError (401,"All fields are required");
    }
    try{
        const imageLocalPath = req.files?.product[0]?.path;
      
        if(!imageLocalPath){
            throw new ApiError (401,"Image is required");
        }
        const image= await uploadOnCloudinary(imageLocalPath);
        
        let programs = await productModel.find({});
    
        let id;
        if(programs.length>0){
            let last_program = programs.slice(-1);
            let last = last_program[0];
            id = last.id + 1
        }
        else{
            id = 1;
        }
    
        const product = await  productModel.create({
        id:id,
        name:name,
        category:category,
        new_price:new_price, 
        old_price:old_price,
        image:image.secure_url,
        available:true

        })
        res.status(200).json(product)

    }catch(err){
        res.status(500).json({message:err})
    }
}

export const getProduct = async(req,res)=>{
    const products = await productModel.find();
    res.status(200).json(products)
}

export const deleteProduct = async (req,res) =>{
    const {id} = req.params;
    if(!Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Product'})
    }
    try{
        const product = await productModel.findByIdAndDelete(id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message:err.message})
    }}

