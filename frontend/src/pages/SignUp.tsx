/* eslint-disable @typescript-eslint/no-explicit-any */
 import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import uploadArea from "../components/assets/upload_area.svg"
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'

interface Inputs  {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    rePassword: string

}


const SignUp:React.FC = () => {
    const {register, handleSubmit, formState: error} = useForm<Inputs>();
    const {dispatch} = useAuthContext()
    const [image,setImage] = useState<Blob | null>(null);
    const [errorState, setErrorState] = useState<string>("");
    const [imageValue, setImageValue] = useState<string>("");
    const [show,setShow] = useState(false)
    const imageHandler = (e:any) => {
        setImage(e.target.files[0])
        setImageValue(URL.createObjectURL(e.target.files[0]))
    }
    const submitHandler:SubmitHandler<Inputs> = async(data) => {
            console.log(data);
            if(!image){
                return setErrorState("Please select an image")
            }
            const formData = new FormData();
            formData.append("avatar", image)
            formData.append("firstName", data.firstName)
            formData.append("lastName", data.lastName)
            formData.append("email", data.email)
            formData.append("password", data.password)
            formData.append("rePassword", data.rePassword)
            formData.append("role", "user")
            const res = await axios.post("http://localhost:4000/user/signup",formData)
            if(res.data){
                console.log(res.data);
                console.log(res.data?.user);
                localStorage.setItem("user",JSON.stringify(res.data?.data.user))
                dispatch({type:"LOGIN", payload:res.data.data.user})
            }
            
    }
    return (
      <div className="w-full flex justify-center items-center bg-gradient-to-b from-red-100 to-slate-100 md:mb-24 " >
          <div className=" md:w-1/3 md:h-1/3 flex flex-col justify-center bg-slate-100 shadow-2xl mt-10  p-10" >
              <h3 className="text-2xl font-semibold text-orange-500" >Sign up</h3>
              <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-2 gap-2 " >
                <div className='my-3 w-full items-center justify-center flex flex-col  col-span-2' >
                    <label htmlFor="image">
                        <img src={(image)? imageValue:uploadArea} alt="" className='w-32 h-32 object-cover' />
                        <input type="file" id='image' accept='image/*' hidden onChange={imageHandler} />
                    </label>
                    {errorState && <p className="text-red-500" >{errorState}</p>}
                </div>
                  <div className="my-3 " >
                      
                      <input type="text" id="firstname" {...register("firstName", {required: {value: true, message: "First Name is required"}})} placeholder="Enter your First Name" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
                        {error?.errors?.firstName && <p className="text-red-500" >{error?.errors?.firstName?.message}</p>}
                  </div>
                  <div className='my-3 ' >
                   
                      <input type="text" id="lastname" {...register("lastName", {required: {value: true, message: "Last Name is required"}})} placeholder="Enter your Last Name" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
                        {error?.errors?.lastName && <p className="text-red-500" >{error?.errors?.lastName?.message}</p>}
                  </div>
                  <div className='my-3 col-span-2' >
                   
                      <input type="email" id="email" {...register("email", {required: {value: true, message: "Email is required"}})} placeholder="Enter your Email" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
                        {error?.errors?.email && <p className="text-red-500" >{error?.errors?.email?.message}</p>}
                  </div>
                  <div className='my-3 relative' >
                   
                      <input type={(show)?"text":"password"} id="password" {...register("password", {required: {value: true, message: "Password is required"}})} placeholder="Enter your Password" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
                        <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                            {!show &&(
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(!show)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )}
                            {show &&(
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(!show)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg>
                              
                            )}
                            

                        </div>
                        {error?.errors?.password && <p className="text-red-500" >{error?.errors?.password?.message}</p>}

                  </div>
                  <div className='my-3 ' >
                   
                      <input type={(show)?"text":"password"} id="repassword" {...register("rePassword", {required: {value: true, message: "rePassword is required"}})} placeholder="Enter Password Again" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
                        {error?.errors?.rePassword && <p className="text-red-500" >{error?.errors?.rePassword?.message}</p>}
                  </div>
                  <button type="submit" className="my-3 col-span-2 w-full border-2 border-orange-500 p-3  transition ease-in-out   rounded-3xl hover:bg-orange-500 hover:text-white" >Register</button>
              </form>
              <p className="text-center" >Already have an account? <a href="/login" className="text-orange-500 font-semibold" >Login</a></p>
          </div>
      </div>
    )
  }
  
  export default SignUp