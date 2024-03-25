import productModel from "../models/productModel.js";
import { Types } from "mongoose";
import axios from "axios";
export const add_product = async(req,res) =>{
    // console.log(req.body);
    const { name, category, new_price, image,old_price,  available } = req.body;
    try{

        const product = await  productModel.create({

        name,
        category,
        new_price, 
        old_price,
        image,
        available

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

