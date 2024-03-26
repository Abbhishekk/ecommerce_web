/* eslint-disable @typescript-eslint/no-explicit-any */
 import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthContext } from '../hooks/useAuthContext';

interface Props{
    logout?: any
}
interface Inputs{
    email: string
    password: string
}

const Login:React.FC<Props> = () => {
   const {register, handleSubmit, formState: error} = useForm<Inputs>();
   const {dispatch} = useAuthContext();
   const [loading, setLoading] = useState(false);
   const submitHandler: SubmitHandler<Inputs> = async(data) =>{
    setLoading(true)
       console.log(data);
        try {
            const res = await axios.post("http://localhost:4000/user/login", {
                email: data.email,
                password: data.password
            })
            if(res.status == 200){
                
                localStorage.setItem("user",JSON.stringify(res.data?.data.user))
                localStorage.setItem("accesstoken",JSON.stringify(res.data?.data.accessToken))
                localStorage.setItem("refreshtoken",JSON.stringify(res.data?.data.refreshToken))
                dispatch({type:"LOGIN", payload: res.data?.data.user})
            }
        } catch (error) {
            console.log(error);
               
        }

       setLoading(false)
   }
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-red-100 to-slate-100 md:mb-24 " >
        <div className=" md:w-1/3 md:h-96 flex flex-col justify-center bg-slate-100 shadow-2xl mt-10  p-10" >
            <h3 className="text-2xl font-semibold text-orange-500" >Login</h3>
            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-2 " >
                <div className="my-3 w-full" >
                    
                    <input type="email" id="email" {...register("email", {required: {value: true, message: "Email is required"}})} placeholder="Enter your email" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
                    {error.errors.email && <p className="text-red-500" >{error.errors.email.message}</p>}
                </div>
                <div>
                 
                    <input type="password" {...register("password", {required: {value: true, message: "Password is required"}})} id="password" placeholder="Enter your password" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
{error.errors.password && <p className="text-red-500" >{error.errors.password.message}</p>}
                </div>
                <button type="submit" className="my-3 col-span-2 w-full border-2 border-orange-500 p-3  transition ease-in-out   rounded-3xl hover:bg-orange-500 hover:text-white" disabled={loading} >
                    {(loading)?("Loading...."):"Sign Up"}
                  </button>
            </form>
            <p className="text-center" >Don't have an account? <a href="/signup" className="text-orange-500 font-semibold" >Sign Up</a></p>
        </div>
    </div>
  )
}

export default Login