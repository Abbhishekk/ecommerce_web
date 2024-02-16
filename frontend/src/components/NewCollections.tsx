// import React from 'react'

import Cards from "./Cards"
import new_collections from "./assets/new_collections"
const NewCollections = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center" >New Collections</h1>
        <hr className="border-2 border-orange-500 w-56 mx-auto my-5" />
        <Cards data_product={new_collections} />
    </div>
  )
}

export default NewCollections