/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className="h-screen bg-slate-300 flex flex-col justify-center content-center">
            <div className='container h-fit mx-auto flex flex-col justify-center text-center'>
                <div className="text-4xl font-bold p-2">LOGIN</div>
                <div className='flex flex-row justify-center p-5'>
                    <div className='
                        w-full md:w-96 lg:w-96 p-5 flex flex-col justify-center content-center align-middle gap-5 
                        border-4 border-sky-800 bg-slate-400 rounded-lg drop-shadow-2xl
                        '
                    >
                        <input className='p-2' type="email" placeholder='Email' required/>
                        <input className='p-2' type="password" placeholder='Password' required/>
                        <button 
                            type='submit' className='bg-blue-800 p-2 text-white'
                            onClick={()=> navigate('/dashboard')}
                        
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="text-md p-2">
                    Don't have an account? 
                    <a
                        href="#"
                        className='font-bold text-blue-600 underline pl-2'
                    >
                        Register
                    </a>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Login