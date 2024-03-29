
import { useProductContext } from "../hooks/useProductContext"
import Cards from "./Cards"


// import React from 'react'

const PopularWomen = () => {
  const {product} = useProductContext();
  const data_product = product.filter(product => product.category === "Women");
  return (
    <div>
        <h1 className="text-3xl font-bold text-center" >POPULAR IN WOMEN</h1>
        <hr className="border-2 border-orange-500 w-56 mx-auto my-5" />
        <Cards data_product={data_product} />
    </div>
  )
}

export default PopularWomen