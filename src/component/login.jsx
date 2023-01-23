import React from 'react'
import { useState, useEffect } from 'react';
import loginImg from '../assets/bg-contact.jpg'
export default function Login() {

    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }
        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters"
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters"
        }
        return errors;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center '>

                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className='text-center mb-8'><span className='py-3 px-6 bg-[#efffbd] rounded-md'> Sign in successfully </span></div>
                ) : (
                    <pre className='hidden text-white '>{JSON.stringify(formValues, undefined, 2)}</pre>
                )}

                <form onSubmit={handleSubmit}
                    className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>

                    <div className='flex flex-col text-gray-400 py-2 '>
                        <label htmlFor="">User Name</label>
                        <input className='rounded-lg p-2 bg-gray-700 mt-2 focus:border-blue-500 focus:border-2 focus:bg-gray-800 focus:outline-none' name="username" type="text" value={formValues.username} onChange={handleChange} />
                    </div>
                    <p className='text-red-700'>{formErrors.username}</p>

                    <div className='flex flex-col text-gray-400 py-2 '>
                        <label htmlFor="">Email</label>
                        <input className='rounded-lg p-2 bg-gray-700 mt-2 focus:border-blue-500 focus:border-2 focus:bg-gray-800 focus:outline-none' name='email' value={formValues.email} onChange={handleChange} />
                    </div>
                    <p className='text-red-700'>{formErrors.email}</p>


                    <div className='flex flex-col text-gray-400 py-2 '>
                        <label htmlFor="">Password</label>
                        <input className='rounded-lg p-2 bg-gray-700 mt-2 focus:border-blue-500 focus:border-2 focus:bg-gray-800 focus:outline-none' name='password' type="password" value={formValues.password} onChange={handleChange} />
                    </div>
                    <p className='text-red-700'>{formErrors.password}</p>


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
