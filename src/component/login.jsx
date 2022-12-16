import React from 'react'
import loginImg from '../assets/bg-contact.jpg'
export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center '>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2 '>
                        <label htmlFor="">User Name</label>
                        <input className='rounded-lg p-2 bg-gray-700 mt-2 focus:border-blue-500 focus:border-2 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2 '>
                        <label htmlFor="">Password</label>
                        <input className='rounded-lg p-2 bg-gray-700 mt-2 focus:border-blue-500 focus:border-2 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2 '>
                        <p className='fles items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                        <p><a href="#">Forgot Password</a></p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/40 hover:shadow-teal-500/30 text-white font-semibold rounded-lg'>Sign In</button>
                </form>
            </div>
        </div>
    )
}
