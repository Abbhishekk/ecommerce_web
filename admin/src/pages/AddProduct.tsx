/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import axios from "axios"
// import { useEffect } from "react"
import imageUpload from "../assets/upload_area.svg";
import {useForm} from "react-hook-form"
import {   useState } from "react";
enum category{
  Men="Men",
  Women="women",
  Kids="Kids"
}
interface Inputs{
  name:string
  price:number
  offer_price:number
  category:category
  image:Blob
}
const AddProduct = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
  const [image, setImage] = useState<Blob | null>(null);

  const imageHandler = (e:any) => {
    setImage(e.target.files[0]);  
  }
  
  const onSubmit = async(data:Inputs) => {
    console.log(data);
    
    const formData = new FormData();
    let resData;
    formData.append('product', data.image);

    try {
      await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData.get("product")
      }).then((res)=>
        res.json()
      ).then((data)=>{
        resData = data;
      });
      console.log( resData);
      
      // Handle successful response
    } catch (error) {
      console.log(error);
      // Handle errors
    }
    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="flex flex-wrap">
        <div className="flex flex-col gap-2 w-full" >
          <label htmlFor="name" className="font-semibold text-sm text-slate-600">Product Title</label>
          <input type="text" className="border-2 border-slate-300 p-2 rounded focus:outline-none" placeholder="Product Title" {...register("name",{required:true})} />
          {errors.name && <p className="text-red-500" >{"Name is required"}</p>}
        </div>
        <div className="flex flex-col gap-2 w-1/2" >
          <label htmlFor="price" className="font-semibold text-sm text-slate-600">Price</label>
          <input type="text" className="border-2 border-slate-300 p-2 rounded focus:outline-none" placeholder="Price" {...register("price",{required:true})} />
          {errors.price && <p className="text-red-500" >{"Price is required"}</p>}
        </div>
        <div className="flex flex-col gap-2 w-1/2" >
          <label htmlFor="offer_price" className="font-semibold text-sm text-slate-600">Offer Price</label>
          <input type="text" className="border-2 border-slate-300 p-2 rounded focus:outline-none" placeholder="Offer Price" {...register("offer_price",{required:true})} />
          {errors.offer_price && <p className="text-red-500" >{"Offer Price is required"}</p>}
        </div>
        <div className="flex flex-col gap-2 w-1/2" >
          <label htmlFor="category" className="font-semibold text-sm text-slate-600">category</label>
          <select {...register("category",{required:true})} id="category" className="border-2 border-slate-300 p-2 rounded focus:outline-none" >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kid">Kids</option>
          </select>
         {errors.category && <p className="text-red-500" >{"category is required"}</p>}
        </div>
        <div className="flex justify-center  gap-2 w-1/2 mt-5 " >
          <label htmlFor="image" className="font-semibold text-sm text-slate-600">
            <img src={image?URL.createObjectURL(image):imageUpload} alt="" className="w-52" />
          </label>
          <input type="file" {...register("image",{required:true})} onChange={imageHandler}  id="image" className="border-2 border-slate-300 p-2 rounded focus:outline-none" hidden  />
          {errors.image && <p className="text-red-500" >{"image is required"}</p>}
        </div>
        <button type="submit" className="w-1/2 font-bold mt-5 bg-orange-500 mx-auto text-white p-2 rounded hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500  transition-all duration-500" >Add</button>
      </form>
    </div>
  )
}

export default AddProduct