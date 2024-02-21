// import React from 'react'

import { useCart } from "../hooks/useCartHooks"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const Cart = () => {
    const {cart, dispatch} = useCart();
    let total = 0;
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'products', headerName: 'Products', width: 70,renderCell: (params) => <img src={params.value} /> },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
          field: 'quantity',
          headerName: 'Quantity',
          type: 'number',
          width: 90,
        },
        {
          field: 'size',
          headerName: 'Size',
          
          
          width: 160,
          
        },
        {
          field: 'total',
          headerName: 'Total',
            
          width: 160,
          valueGetter: (params: GridValueGetterParams) =>
          `${params.row.price * params.row.quantity || 0}`,
        },
        {
          field: 'remove',
          headerName: 'Remove',
        renderCell: (params) => (<button onClick={() => {dispatch({type: "REMOVE_CART", payload: params.value})
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg></button>),
          width: 160,
          
        },
      ];
      const rows = cart.map((item,i) => {
          total += item.new_price * item.quantity
          return{
            id: i+1,
            products: item.image,
            title: item.name,
            price: item.new_price,
            quantity: item.quantity,
            size: item.size,
          
            remove: [item.id,item.size,item.quantity]
          }
      })
      console.log(rows);
      
  return (
    <div>
        
      <DataGrid
        key={1}
        rows={rows}
        columns={columns}
       
        className="w-3/4 mx-auto " 
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />

      <div className="flex mx-auto w-3/4 gap-5 mt-10" >
        <div className="flex flex-col mx-auto w-1/2" >
            <h2 className="text-4xl font-semibold" >Cart Totals</h2>
            <div className="flex justify-between w-full mt-5" >
                <p>Subtotal:</p>
                <p>${total}</p>
            </div>
            <hr className="border-1 border-orange-500 w-full my-2" />
            <div className="flex justify-between w-full" >
                <p>Shipping Fee:</p>
                <p>Free</p>
            </div>
            <hr className="border-1 border-orange-500 w-full my-2" />
            <button className="border-2 p-5 font-semibold mt-5 text-slate-900 border-orange-500 hover:text-white mx-auto rounded hover:bg-orange-500 px-5 py-1">
                PROCEED TO CHECKOUT
            </button>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto w-1/2 p-5" >
            <p className="w-full text-sm text-center " >If you have promo code, Enter it here</p>
            <div className="flex mt-2 " >
                <input type="text" name="promo" id="promo" className="border-2 focus:outline-none border-orange-500 px-10 py-3" placeholder="Enter your Promo Code" />
                <button className="bg-orange-500 text-white px-5 py-1" >Submit</button>
            </div>
        </div>
      </div>
    </div>
  
  )
}

export default Cart