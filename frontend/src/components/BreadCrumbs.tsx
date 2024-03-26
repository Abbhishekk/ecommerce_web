import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
category?: string
name?: string
}

const BreadCrumbs:React.FC<Props> = ({category,name}) => {
  return (
    <div className="flex mx-auto w-4/5 items-center" >
            <p>
                <Link to={"/"} >HOME</Link> 
                
            </p>
            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <p>
                <Link to={"/"} >SHOP</Link> 
                
            </p>
            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <p>
                <Link to={`/${category}`} >{category?.toUpperCase()}</Link> 
                
            </p>
            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <p>{name}</p>
        </div>
  )
}

export default BreadCrumbs