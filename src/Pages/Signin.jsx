import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signin = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Emailerror, setEmailerror] = useState('');
    const [Passworderror, setPassworderror] = useState('');

    const HandleClick = (e) => {
        e.preventDefault()
        if (!email) {
            setEmailerror('Please fill this email again !');
        }
        if (!password) {
            setPassworderror('Please fill this password again !');
        }
        axios.post("http://localhost:8080/product/signin", {
            email: email,
            password: password
        }, {
            withCredentials: true,
        }).then((res) => (
            toast.success(res.data.message),
            navigate('/Product')
        ))
            .catch((err) => toast.warn(err.response.data))
    }
    return (
        <div>


            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign in</h2>
                <form>
                    {/* Mail Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {Emailerror && !email && <p style={{ color: 'red' }}>{Emailerror}</p>}
                    </div>

                    {/* password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {Passworderror && !password && <p style={{ color: 'red' }}>{Passworderror}</p>}
                    </div>

                    {/* button */}
                    <div className='flex'>
                        {/* Submit Button */}
                        <button
                            onClick={(e) => HandleClick(e)}
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 mx-5 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Submit
                        </button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin