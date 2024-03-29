// import React from 'react'

import kidBanner from "../components/assets/banner_kids.png";

import PageCards from "../components/PageCards";
import { useState } from "react";
import { useProductContext } from "../hooks/useProductContext";
const Kids = () => {
    const {product} = useProductContext();
    const [sort,setSort] = useState<string>('');
    console.log(sort)
  return (
    <div className="w-4/5 mx-auto mb-10" >
        <div className=" mb-10" >
            <img src={kidBanner} alt="Kids Banner" className="w-full" />
        </div>
        <div className="flex justify-between" >
            <p className="text-lg" > <strong>Showing 1 - 12</strong> out of 54 results </p>
            <p>
                <select name="sort" id="sort" onChange={(e)=>setSort(e.target.value)} className="text-lg border-2 p-3 focus:outline-none transition ease-in-out   rounded-3xl">
                    <option value="">Sort By</option>
                    <option value="htl">Price: High to Low</option>
                    <option value="lth">Price: Low to High</option>
                </select>
            </p>
        </div>
        <div className="flex flex-col" >
            <PageCards data_product={product} category="Kid" sort={sort} />
            <button className="text-lg font-semibold mt-5 border-2 border-orange-500 p-3  transition ease-in-out   rounded-3xl hover:bg-orange-500 hover:text-white  mx-auto" >Explore More</button>
        </div>
    </div>
  )
}

export default Kids