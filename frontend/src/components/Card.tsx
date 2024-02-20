// import React from 'react'

interface CardProps {
    key: number
    name: string
    image: string
    new_price: number
    old_price: number
}

const Card = (props: CardProps) => {
  return (
    <div  className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer" >
        <img src={props.image} alt={props.name} className="w-full" />
        <div className="my-3">
            <p className="md:text-sm md:font-semibold" >{props.name}</p>
            <p className="text-orange-500 font-bold" >${props.new_price} <del>${props.old_price}</del> </p>
            
        </div>
    </div>
  )
}

export default Card