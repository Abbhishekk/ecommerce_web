
import Cards from "./Cards"
import data_product from "./assets/data"

// import React from 'react'

const PopularWomen = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center" >POPULAR IN WOMEN</h1>
        <hr className="border-2 border-orange-500 w-56 mx-auto my-5" />
        <Cards data_product={data_product} />
    </div>
  )
}

export default PopularWomen