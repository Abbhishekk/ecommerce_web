
import { Schema, model } from "mongoose";
const schema = Schema;

const product = new schema({
   
    name: {
        type: String,
        required: true
    },
    
    category: {
        type: String,
        required: true  
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
},{Timestamps: true})

export default model("product", product)