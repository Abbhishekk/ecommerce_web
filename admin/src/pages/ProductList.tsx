import axios from "axios"
import { useEffect, useState } from "react"
import RowSkeleton from "../components/RowSkeleton"

// import React from 'react'
type productItem = {
  name:string
  image:string
  old_price:number
  new_price:number
  category:string
  _id:string
  
}

const ProductList = () => {
  const [products,setProducts] = useState([]);

  const deleteProduct = async (id:string) => {
    await axios.delete(`http://localhost:4000/product/deleteProduct/${id}`);
    const newProducts = products.filter((product:productItem) => product._id !== id)
    setProducts(newProducts)
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:4000/product/getProduct");
      console.log(response.data)
      setProducts(response.data)
    }
     fetchProducts()
  },[])
  return (
    <div className="flex flex-col justify-center items-center  mt-5" >
      <h1 className="text-3xl font-semibold " >Product List</h1>
      <div className="overflow-auto w-full" >
        <table className="table mt-10 w-3/4 mx-auto  rounded-b-lg" >
          <thead className="bg-slate-300 rounded-t-xl" >
            <tr>
              <th className="p-5">Products</th>
              <th className="p-5">Title</th>
              <th className="p-5">Old Price</th>
              <th className="p-5">New Price</th>
              <th className="p-5">Category</th>
              <th className="p-5">Remove</th>
            </tr>
          </thead>
          <tbody  >
            {products && products.map((product:productItem)=>{
              return (
                <tr className="hover:bg-slate-300 border-b-2 border-slate-300 mt-5" key={product._id} >
                  <td className="p-5" ><img src={product.image} alt={product.name} width={150} /></td>
                  <td className="p-5">{product.name}</td>
                  <td className="p-5">${product.old_price}</td>
                  <td className="p-5">${product.new_price}</td>
                  <td className="p-5">{product.category}</td>
                  <td className="p-5"><button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => deleteProduct(product._id)} >Delete</button></td>
                </tr>
              )
            })}
           
          </tbody>
          {
              !products && (
                <tbody>
                  <RowSkeleton />
                  <RowSkeleton />
                  <RowSkeleton />

                </tbody>
              )
            }
        </table>
      </div>
    </div>
  )
}

export default ProductList