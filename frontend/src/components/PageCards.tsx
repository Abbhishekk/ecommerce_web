// import { Link } from "react-router-dom"
import Card from "./Card"

 import React from 'react'
interface CardProps {
    id: number
    category: string
    name: string
    image: string
    new_price: number
    old_price: number
    available: boolean
}
type data_product = {
    data_product:CardProps[],
    category:string
    sort: string
}

const PageCards:React.FC<data_product> = (props) => {
    if(props.sort == 'htl'){
        props.data_product.sort((a,b)=>b.new_price - a.new_price)
    }
    if(props.sort == 'lth'){
        props.data_product.sort((a,b)=>a.new_price - b.new_price)
    }
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 w-4/5 gap-5 mb-10 mx-auto"  >
            {props.data_product.map((item)=>{
                if(item.category == props.category){
                    return(
                        <Card key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )

                }
            })}
        </div>
  )
}

export default PageCards