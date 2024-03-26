/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'

import {  useParams } from "react-router-dom"
import data_product from "../components/assets/all_product"
import { Rating } from "@material-tailwind/react";
import { useState } from "react";
// import { CartContextProvider } from "../context/CartContext";
import { useCart } from "../hooks/useCartHooks";
import BreadCrumbs from "../components/BreadCrumbs";
const Product = () => {
    const {id} = useParams();
    const [size, setSize] = useState("S");
    const {cart, dispatch} = useCart()
    
    const product = data_product.find(product => product.id === Number(id))

    const addToCart= () =>{
        console.log(cart.find(item => item.id === Number(id) && item.size === size));
        
        if(cart.find(item => item.id === Number(id) && item.size === size) !== undefined){
            const payload = cart.filter(item => {
                
                if(item.id == Number(id) && item.size === size){
                    return item.quantity +=1
                }
                else{
                    return item
                }
              
                
            })
            
            
            dispatch({type: "UPDATE_CART", payload: payload})
        }
        else{
    const quantity = cart.find(item => item.id === Number(id) && item.size === size )?.quantity || 1

            dispatch({type: "ADD_CART", payload: {...product,size,quantity}})

        }
    }
  return (
    <div className="" >
        <BreadCrumbs category={product?.category} name={product?.name} />
       
        <div className="flex  flex-row mx-auto w-4/5  md:gap-10" >
            <div className="container mx-auto w-1/2">
                <div className="grid-cols-3  lg:grid lg:gap-3 lg:grid-rows-2">
                    
                    <div className="w-full  flex justify-center p-2 col-span-3 row-span-1 rounded">
                        <img src={product?.image}
                            alt="image" className="object-contain bg-red-200 " />
                    </div>
                    <div className="w-full rounded ">
                        <img src={product?.image}
                            alt="image"/>
                    </div>
                    <div className="w-full rounded ">
                        <img src={product?.image}
                            alt="image"/>
                    </div>
                    <div className="w-full rounded ">
                        <img src={product?.image}
                            alt="image"/>
                    </div>
                    
                </div>
            </div>
            <div className="w-1/2  " >
                <h1 className="text-3xl" >{product?.name}</h1>
                <div className="flex items-center gap-2" ><Rating value={4} className="flex flex-row text-yellow-500 bg-yellow-200 bg-clip-text" readonly placeholder={"ratings"} /> (122)</div>
                <p className="text-xl  mt-10" ><del className="mr-10 font-bold text-slate-400 " >${product?.old_price}</del> <span className="text-orange-500 font-bold" >${product?.new_price}</span> </p>

                <p className="text-lg mt-10" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium cum rem nemo error sit consectetur, atque 
                </p>
                <div className="flex flex-col mt-10" >
                    <p className="text-lg font-semibold text-slate-700" >Select Size</p>
                    <div className="flex flex-row gap-2 w-full" >
                        <p className={`p-5  w-full flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer  ${(size === "S")?("bg-orange-500 text-white"):("bg-slate-200")}`} onClick={()=>setSize("S")} >S</p>
                        <p className={`p-5  w-full flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer  ${(size === "M")?("bg-orange-500 text-white"):("bg-slate-200")}`} onClick={()=>setSize("M")} >M</p>
                        <p className={`p-5  w-full flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer  ${(size === "L")?("bg-orange-500 text-white"):("bg-slate-200")}`} onClick={()=>setSize("L")} >L</p>
                        <p className={`p-5  w-full flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer  ${(size === "XL")?("bg-orange-500 text-white"):("bg-slate-200")}`} onClick={()=>setSize("XL")} >XL</p>
                        <p className={`p-5  w-full flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer  ${(size === "XXL")?("bg-orange-500 text-white"):("bg-slate-200")}`} onClick={()=>setSize("XXL")} >XXl</p>
                        
                    </div>
                    <div className="mt-5">
                        <button className="my-3 md:px-16 border-2 border-orange-500 p-3  transition ease-in-out   rounded hover:bg-orange-500 hover:text-white" onClick={()=>addToCart()} >Add To Cart</button>
                    </div>
                </div>
                <p className="text-lg mt-10" ><span className="text-orange-500 font-bold" >Category: </span>{product?.category.toLocaleUpperCase()}</p>
                <p className="text-lg mt-2" ><span className="text-orange-500 font-bold" >Tags: </span>{"Modern"}</p>
            </div>
        </div>
    </div>
  )
}

export default Product