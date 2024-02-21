import Card from "./Card"

// import React from 'react'
interface CardProps {
    id: number
  
    name: string
    image: string
    new_price: number
    old_price: number
}
type data_product = {
    data_product:CardProps[]
}

const Cards = (props:data_product) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 w-4/5 gap-5 mb-10 mx-auto" >
            {props.data_product.map((item:CardProps)=>{
                return(
                    <Card key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                )
            })}
        </div>
  )
}

export default Cards