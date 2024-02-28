/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import cart from "../assets/Product_Cart.svg";
import cart_block from "../assets/Product_list_icon.svg";
type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const SideBar = ({children}:Props) => {
  return (
    <div className="flex mt-5 " >
      <aside className=" bg-slate-100 h-screen w-1/5 " >
        <ul className="flex flex-col gap-5" >
          <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300 hover:font-semibold" >
            <Link to={"/add_product"} className="flex items-center gap-2" >
            <img src={cart} alt="cart" />
            Add Product
            </Link>
          </li>
          <li><hr className="w-full bg-slate-300" /></li>
          <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300 hover:font-semibold" >
            <Link to={"/"} className="flex items-center gap-2" >
            <img src={cart_block} alt="product list" />
            Product List
            
            </Link>
          </li>
          <li><hr /></li>
        </ul>
      </aside>
      <main className="w-4/5">

      {children}
      </main>
    </div>
  )
}

export default SideBar