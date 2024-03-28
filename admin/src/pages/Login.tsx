/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthContext } from '../hook/useAuthContext';
import logo from "../assets/nav-logo.svg";
import { Alert } from '@material-tailwind/react';

interface Props{
    logout?: any
}
interface Inputs{
    email: string
    password: string
}

const Login:React.FC<Props> = () => {
   const {register, handleSubmit, formState: error} = useForm<Inputs>();
   const [errors,setErrors] = useState("");
   const {dispatch} = useAuthContext();
   const [loading, setLoading] = useState(false);
   const submitHandler: SubmitHandler<Inputs> = async(data) =>{
    setErrors("");
    setLoading(true)
      
        try {
            const res = await axios.post("http://localhost:4000/user/adminlogin", {
                email: data.email,
                password: data.password
            })
            if(res.status == 200){
                console.log(res.data);
                
                localStorage.setItem("user",JSON.stringify(res.data?.data.user))
                localStorage.setItem("accesstoken",res.data?.data.accessToken)
                localStorage.setItem("refreshtoken",res.data?.data.refreshToken)
                dispatch({type:"LOGIN", payload: res.data?.data.user,accessToken: res.data?.data.accessToken, refreshToken: res.data?.data.refreshToken})
            }
        } catch (error:any) {
           
            setErrors(error.response.data)
               
        }

       setLoading(false)
   }
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-red-100 to-slate-100 md:mb-24 " >
        <div className=" md:w-1/3 md:h-96 flex flex-col justify-center bg-slate-100 shadow-2xl mt-10  p-10" >
            <img src={logo} alt="" />
            <h3 className="text-2xl font-semibold text-orange-500" >Login</h3>
            {errors && (

                <Alert color='red' className='rounded relative px-2 py-2' >
                    {errors}
                    <button className='absolute top-50 right-2' onClick={() => setErrors("")} >X</button>
                </Alert>
            )}
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

        </div>
    </div>
  )
}

export default Login