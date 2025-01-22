import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Update = () => {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, SetGender] = useState('')
    const [age, SetAge] = useState('')
    const [date, SetDate] = useState('')

    // Set the current date dynamically for the min value
    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD' format

    // Error handlers
    const [ImageError, setImageError] = useState('')
    const [EmailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [GenderError, setGenderError] = useState('')
    const [AgeError, setAgeError] = useState('')
    const [DateError, SetDateError] = useState('')


    const getUser = () => {
        axios.get(`https://crud-g2k4.onrender.com/product/GetOneProducts/${userId}`, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((res) => (
                setImage(res.data.message.image),
                setEmail(res.data.message.email),
                setPassword(res.data.message.password),
                SetGender(res.data.message.gender),
                SetAge(res.data.message.age),
                SetDate(res.data.message.date)
            ))
            .catch((err) => console.error(err))
    }
    const HandleClick = (e) => {
        e.preventDefault()
        if (!image) {
            setImageError('Image is required');
            return navigate(`/Update/${userId}`);
        }
        if (!email) {
            setEmailError('Email is required');
            return navigate(`/Update/${userId}`);
        }
        if (!password) {
            setPasswordError('Password is required');
            return navigate(`/Update/${userId}`);
        }
        if (!gender) {
            setGenderError('Select Gender ! please');
            return navigate(`/Update/${userId}`);
        }
        if (!age) {
            setAgeError('Select Age !');
            return navigate(`/Update/${userId}`);
        }
        if (!date || date <= today) {
            SetDateError('Select Date ! And Date must be between after today');
            return navigate(`/Update/${userId}`);
        }

        axios.patch(`https://crud-g2k4.onrender.com/product/UpdateProducts/${userId}`, {
            file: image,
            email,
            password,
            gender,
            age,
            date,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((res) => (toast.success('Update Success Fully !'), navigate("/Product")
        ))
            .catch((err) => toast.warning(err.response.data))
    }
    const defaultImage = (e) => {
        e.preventDefault()
        setImage(null)
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 m-auto">Update Product</h2>
                <form encType="multipart/form-data" method="post">
                    {/* Image Input */}
                    <div className="mb-4">
                        <div className="flex items-center justify-center space-x-4">
                            <img
                                src={image instanceof File ? URL.createObjectURL(image) : `http://localhost:8080/${image}`}
                                alt={email}
                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-sm"
                            />
                            <button onClick={(e) => defaultImage(e)} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
                                Remove
                            </button>
                        </div>
                        <label htmlFor="Image" className="block text-gray-700 font-semibold mb-2">
                            Image
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            alt='file'
                            placeholder="Upload Your Image"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {ImageError && !image && <p style={{ color: "red" }}>{ImageError}</p>}

                    </div>

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {EmailError && !email && <p style={{ color: "red" }}>{EmailError}</p>}

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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {passwordError && !password && <p style={{ color: "red" }}>{passwordError}</p>}

                    </div>

                    {/* Gender Input */}
                    {/* Gender Input */}
                    <div className="mb-6">
                        <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                            Gender
                        </label>
                        <div className="flex items-center space-x-4">
                            {['male', 'female', 'other'].map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id={option}
                                        name="gender"
                                        value={option}
                                        checked={gender === option}
                                        onChange={(e) => SetGender(e.target.value)}
                                        className="w-4 h-4 border-gray-300 focus:ring-blue-400 focus:outline-none"
                                    />
                                    <span className="text-gray-700">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                                </label>
                            ))}
                        </div>
                        {GenderError && !gender && <p style={{ color: "red" }}>{GenderError}</p>}

                    </div>

                    {/* Age Input */}
                    <div className="mb-6">
                        <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
                            Age
                        </label>
                        <select
                            name="age"
                            id="age"
                            value={age}
                            onChange={(e) => SetAge(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="" disabled selected>
                                Select Age
                            </option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                        </select>
                        {AgeError && !age && <p style={{ color: "red" }}>{AgeError}</p>}

                    </div>



                    {/* Date Input */}
                    <div className="mb-6">
                        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            placeholder="Enter Your Date"
                            value={date}
                            onChange={(e) => SetDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {DateError && !date || date <= today && <p style={{ color: "red" }}>{DateError}</p>}

                    </div>

                    <div className='flex'>
                        {/* Submit Button */}
                        <button
                            onClick={(e) => {
                                HandleClick(e);
                            }}
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

export default Update
