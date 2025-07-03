import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
    let [isLoading, setIsLoading] = useState(false);
    let [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate();

    let validationSchema = Yup.object({
        firstName: Yup.string().min(3, 'First name minlength is 3').max(10, 'First name maxlength is 10').required('First name is required'),
        lastName: Yup.string().min(3, 'Last name minlength is 3').max(10, 'Last name maxlength is 10').required('Last name is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string()
            .min(6, '6 characters, contain an uppercase letter, a lowercase letter, a number, and a special character (@$!%?&#)')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%?&#]{6,100}$/,
                'Must include uppercase, lowercase, number & special (@$!%?&#)'
            )
            .max(100, 'Password maxlength is 100')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phone: Yup.string().matches(/^(01)[0-2,5][0-9]{8}$/, 'Phone number is invalid').required('Phone number is required'),
        age: Yup.number().min(0, 'Age must be a positive number').required('Age is required'),
        weight: Yup.number().min(0, 'Weight must be a positive number').required('Weight is required'),
        height: Yup.number().min(0, 'Height must be a positive number').required('Height is required'),
        gender: Yup.string().oneOf(['male', 'female']).required('Gender is required')
    });

    let formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            age: "",
            weight: "",
            height: "",
            gender: ""
        },
        validationSchema,
        onSubmit: registerSubmit
    });

    async function registerSubmit(values) {
        setIsLoading(true)
        const { confirmPassword, ...apiData } = values;
        let { data } = await axios.post('https://rage-three.vercel.app/auth/signup', apiData).catch((err) => {
            setErrMsg(err.response.data.message || 'An error occurred during registration');
            setIsLoading(false)

        })
        console.log(data);

        if (data.success == true) {
            setIsLoading(false)
            toast.success('Please Verify Your Email', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            setTimeout(() => {
                navigate('/login')
            },3000)
        }
    }



    return (
        <>
            <ToastContainer />
            <div className='flex justify-center items-center absolute inset-0 bg-black z-30 p-4 overflow-y-auto pt-20'>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative m-auto bg-white p-8 rounded-lg shadow-xl z-30 w-full max-w-2xl my-auto">
                    <h3 className='text-center text-3xl font-bold text-gray-800 mb-2'>Create Your Account</h3>
                    <p className='text-center text-lg text-gray-600 mb-8'>Please fill out the form below to register</p>

                    {errMsg ? <div className="bg-black border border-secondary-color text-dimmed-secondary-color px-4 py-3 rounded relative mb-6 w-1/2 m-auto" role="alert">{errMsg}</div> : ''}

                    <form className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4' onSubmit={formik.handleSubmit}>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="firstName">First Name:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="text"
                                id='firstName'
                                name='firstName'
                                placeholder='Omer'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.firstName}</div> : ''}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="lastName">Last Name:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="text"
                                id='lastName'
                                name='lastName'
                                placeholder='Mustafa'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.lastName}</div> : ''}
                        </div>

                        <div className="col-span-1 md:col-span-2">
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
                            {formik.touched.email && formik.errors.email ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.email}</div> : ''}
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
                            {formik.touched.password && formik.errors.password ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.password}</div> : ''}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="password"
                                id='confirmPassword'
                                name='confirmPassword'
                                placeholder='*********'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.confirmPassword}</div> : ''}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="phone">Phone:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="tel"
                                id='phone'
                                name='phone'
                                placeholder='e.g., +201234567890'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.phone}</div> : ''}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="age">Age:</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="number"
                                id='age'
                                name='age'
                                placeholder='e.g., 30'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.age}
                            />
                            {formik.touched.age && formik.errors.age ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.age}</div> : ''}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="weight">Weight (kg):</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="number"
                                id='weight'
                                name='weight'
                                placeholder='e.g., 70'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.weight}
                            />
                            {formik.touched.weight && formik.errors.weight ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.weight}</div> : ''}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="height">Height (cm):</label>
                            <input
                                className='w-full px-4 py-2 border border-dimmed-secondary-color rounded-md focus:ring-secondary-color focus:border-secondary-color transition duration-150 ease-in-out text-gray-900 placeholder-gray-500'
                                type="number"
                                id='height'
                                name='height'
                                placeholder='e.g., 175'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.height}
                            />
                            {formik.touched.height && formik.errors.height ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.height}</div> : ''}
                        </div>

                        {/* Gender Selection */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Gender:</label>
                            <div className="mt-2 flex">
                                <label className="inline-flex items-center mr-6 cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.gender === 'male'}
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 ease-in-out peer-checked:border-secondary-color peer-checked:bg-white peer-hover:border-secondary-color/60 peer-hover:scale-105 peer-focus:ring-4 peer-focus:ring-secondary-color/20 group-hover:shadow-md"></div>
                                        <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-secondary-color rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-200 ease-in-out peer-checked:scale-100"></div>
                                    </div>
                                    <span className="ml-3 text-gray-700 transition-colors duration-200 group-hover:text-secondary-color">Male</span>
                                </label>
                                <label className="inline-flex items-center cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.gender === 'female'}
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 ease-in-out peer-checked:border-secondary-color peer-checked:bg-white peer-hover:border-secondary-color/60 peer-hover:scale-105 peer-focus:ring-4 peer-focus:ring-secondary-color/20 group-hover:shadow-md"></div>
                                        <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-secondary-color rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-200 ease-in-out peer-checked:scale-100"></div>
                                    </div>
                                    <span className="ml-3 text-gray-700 transition-colors duration-200 group-hover:text-secondary-color">Female</span>
                                </label>
                            </div>
                            {formik.touched.gender && formik.errors.gender ? <div className="text-dimmed-secondary-color text-sm mt-1">{formik.errors.gender}</div> : ''}
                        </div>
                        ---

                        {/* Submit Button */}
                        <div className="col-span-1 md:col-span-2 mt-6">
                            {isLoading ? (
                                <button
                                    disabled={!(formik.isValid && formik.dirty)}
                                    type='button'
                                    className='w-full bg-dimmed-secondary-color text-white font-semibold py-2.5 px-4 rounded-md opacity-75 cursor-not-allowed flex items-center justify-center'
                                >
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Loading...
                                </button>
                            ) : (
                                formik.isValid && formik.dirty ? <button type='submit' className='w-full hover:bg-secondary-color hover:text-black bg-black text-secondary-color font-semibold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out'>Register</button> : <>
                                    <button
                                        onClick={registerSubmit}
                                        disabled={!(formik.isValid && formik.dirty)}
                                        type='submit'
                                        className='w-full bg-black opacity-50 text-secondary-color font-semibold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out'
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                    <p className="text-center text-gray-600 mt-6">
                        Already have an account? <Link to="/login" className="text-secondary-color hover:underline font-semibold">Log In</Link>
                    </p>
                </div >
            </div >

        </>
    )
}
