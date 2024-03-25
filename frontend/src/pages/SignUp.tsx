 import React from 'react'

const SignUp:React.FC = () => {
    return (
      <div className="w-full flex justify-center items-center bg-gradient-to-b from-red-100 to-slate-100 md:mb-24 " >
          <div className=" md:w-1/3 md:h-96 flex flex-col justify-center bg-slate-100 shadow-2xl mt-10  p-10" >
              <h3 className="text-2xl font-semibold text-orange-500" >Sign up</h3>
              <form action="" className="flex flex-col gap-2 " >
                  <div className="my-3 w-full" >
                      
                      <input type="email" id="email" placeholder="Enter your email" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
  
                  </div>
                  <div>
                   
                      <input type="password" id="password" placeholder="Enter your password" className="w-full p-3 focus:outline-none outline outline-red-200 rounded-xl" />
  
                  </div>
                  <button type="submit" className="my-3 w-full border-2 border-orange-500 p-3  transition ease-in-out   rounded-3xl hover:bg-orange-500 hover:text-white" >Register</button>
              </form>
              <p className="text-center" >Already have an account? <a href="/login" className="text-orange-500 font-semibold" >Login</a></p>
          </div>
      </div>
    )
  }
  
  export default SignUp