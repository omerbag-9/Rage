import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

export default function Login({ setUserToken, setRole }) { // Destructure setUserToken and setRole from props
    let [isLoading, setIsLoading] = useState(false);
    let [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    let validationSchema = Yup.object({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(100, 'Password maxlength is 100')
            .required('Password is required'),
    });

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: loginSubmit,
    });

    async function loginSubmit(values) {
        setIsLoading(true);
        setErrMsg('');
            let { data } = await axios.post('https://rage-three.vercel.app/auth/login', values).catch((err => {
                setErrMsg(err.response.data.message || 'An error occurred during login');
                setIsLoading(false);
            }));
            console.log(data);
            if (data.message === 'login successfully') {
                setIsLoading(false);
                Cookies.set('token', data.data.token);
                window.location.href = '/';
        }
    }

    return (
        <>
            <div className='flex justify-center items-center absolute inset-0 bg-black z-30 p-4 overflow-y-auto pt-20'>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative m-auto bg-white p-8 rounded-lg shadow-xl z-30 w-full max-w-md my-auto">
                    <h3 className='text-center text-3xl font-bold text-gray-800 mb-2'>Login to Your Account</h3>
                    <p className='text-center text-lg text-gray-600 mb-8'>Welcome back! Please enter your credentials</p>

                    {errMsg ? 
                        <div className="bg-black border border-secondary-color text-dimmed-secondary-color px-4 py-3 rounded relative mb-6 w-full text-center" role="alert">
                            {errMsg}
                        </div>  : "" }

                    <form className='grid grid-cols-1 gap-y-4' onSubmit={formik.handleSubmit}>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="email">Email address:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="email"
                                id='email'
                                name='email'
                                placeholder='omermustafa@gmail.com'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="password">Password:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="password"
                                id='password'
                                name='password'
                                placeholder='*********'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        ---

                        {/* Submit Button */}
                        <div className="mt-6">
                            {isLoading ? (
                                <button
                                    disabled={true}
                                    type='button'
                                    className='w-full bg-dimmed-secondary-color text-white font-semibold py-2.5 px-4 rounded-md opacity-75 cursor-not-allowed flex items-center justify-center'
                                >
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Loading...
                                </button>
                            ) : (
                                <button
                                    type='submit'
                                    disabled={!(formik.isValid && formik.dirty)} // Disable if form is not valid or not touched
                                    className={`w-full font-semibold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out ${formik.isValid && formik.dirty ? 'hover:bg-secondary-color hover:text-black bg-black text-secondary-color' : 'bg-black opacity-50 text-secondary-color cursor-not-allowed'}`}
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </form>
                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account? <Link to="/signup" className="text-secondary-color hover:underline font-semibold">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    );
}