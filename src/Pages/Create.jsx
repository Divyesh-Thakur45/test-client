import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Create = () => {


    const options = [
        { language: 'English' },
        { language: 'Hindi' },
        { language: 'Marathi' },
        { language: 'Gujarati' },
        { language: 'Marvadi' },
        { language: 'Tamil' },
        { language: 'Maliyali' },
    ]

    // States
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, SetGender] = useState('')
    const [age, SetAge] = useState('')
    const [languageData, setlanguageData] = useState(options)
    const [language, setlanguage] = useState([])
    const [hobbies, setHobbies] = useState([])
    const [date, SetDate] = useState('')

    // Set the current date dynamically for the min value
    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD' format

    // Error handlers
    const [ImageError, setImageError] = useState('')
    const [EmailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [GenderError, setGenderError] = useState('')
    const [AgeError, setAgeError] = useState('')
    const [LanguageError, setLanguageError] = useState('')
    const [DateError, SetDateError] = useState('')
    const [HobbiesError, setHobbiesError] = useState('')


    const handleSelect = (selectedList) => {
        setlanguage(selectedList.map((e) => e.language))
        setLanguageError("")
    };

    const handleRemove = (selectedList) => {
        setlanguage(selectedList.map((e) => e.language));
    };

    const HandleCheck = (e) => {
        const clicked = e.target.checked
        if (clicked) {
            setHobbies([...hobbies, e.target.value])
        } else {
            setHobbies(hobbies.filter((item) => item !== e.target.value))
        }
        setHobbiesError("")
    }
    const HandleSubmit = (e) => {

        e.preventDefault()
        if (!image) {
            setImageError('Image is required');
            return navigate("/Create");
        }
        if (!email) {
            setEmailError('Email is required');
            return navigate("/Create");
        }
        if (!password) {
            setPasswordError('Password is required');
            return navigate("/Create");
        }
        if (!gender) {
            setGenderError('Select Gender ! please');
            return navigate("/Create");
        }
        if (!age) {
            setAgeError('Select Age !');
            return navigate("/Create");
        }
        if (language.length == 0) {
            setLanguageError('Select Language !');
            return navigate("/Create");
        }
        if (hobbies.length == 0) {
            setHobbiesError('Select Hobbies !');
            return navigate("/Create");
        }
        if (!date || date <= today) {
            SetDateError('Select Date ! And Date must be between after today');
            return navigate("/Create");
        }

        axios.post(`https://crud-g2k4.onrender.com/product/CreateProducts`, {
            file: image,
            email,
            password,
            gender,
            age,
            language,
            hobbies,
            date,
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => (
            toast.success(res.data.message),
            navigate("/Product")
        ))
            .catch((err) => toast.warning(err.response.data))
    }

    return (

        <div>

            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Form</h2>
                <form>
                    {/* Image Input */}
                    <div className="mb-4">
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
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {passwordError && !password && <p style={{ color: "red" }}>{passwordError}</p>}

                    </div>

                    {/* Gender Input */}
                    <div className="mb-6">
                        <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                            Gender
                        </label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    onChange={(e) => SetGender(e.target.value)}
                                    className="w-4 h-4 border-gray-300 focus:ring-blue-400 focus:outline-none"
                                />
                                <span className="text-gray-700">Male</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    onChange={(e) => SetGender(e.target.value)}
                                    className="w-4 h-4 border-gray-300 focus:ring-blue-400 focus:outline-none"
                                />
                                <span className="text-gray-700">Female</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    onChange={(e) => SetGender(e.target.value)}
                                    className="w-4 h-4 border-gray-300 focus:ring-blue-400 focus:outline-none"
                                />
                                <span className="text-gray-700">Other</span>
                            </label>
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

                    {/* Multi Selector */}
                    <div className="mb-6">
                        <label htmlFor="Language" className="block text-gray-700 font-semibold mb-2">
                            Language
                        </label>
                        < Multiselect
                            options={languageData} displayValue="language"
                            onSelect={handleSelect}
                            onRemove={handleRemove}
                        />
                        {LanguageError && language.length == 0 && <p style={{ color: "red" }}>{LanguageError}</p>}
                    </div>

                    {/* Hobbies Input */}
                    <div className="mb-6">
                        <fieldset>
                            <legend className="block text-lg font-semibold text-gray-800 mb-4">
                                Choose your Hobbies:
                            </legend>

                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="dancing"
                                        name="dancing"
                                        onChange={(e) => HandleCheck(e)}
                                        value="Dancing"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label htmlFor="dancing" className="text-gray-700">
                                        Dancing
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="Singing"
                                        name="Singing"
                                        value="Singing"
                                        onChange={(e) => HandleCheck(e)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label htmlFor="Singing" className="text-gray-700">
                                        Singing
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="Sports"
                                        name="Sports"
                                        value="Sports"
                                        onChange={(e) => HandleCheck(e)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label htmlFor="Sports" className="text-gray-700">
                                        Sports
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="Reading"
                                        name="Reading"
                                        value="Reading"
                                        onChange={(e) => HandleCheck(e)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label htmlFor="Reading" className="text-gray-700">
                                        Reading
                                    </label>
                                </div>
                            </div>
                            {HobbiesError && hobbies.length == 0 && <p style={{ color: "red" }}>{HobbiesError}</p>}
                        </fieldset>
                    </div>


                    {/* Date Input */}
                    <div className="mb-6">
                        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            min={today}
                            id="date"
                            name="date"
                            placeholder="Enter Your Date"
                            onChange={(e) => SetDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {DateError && !date || date <= today && <p style={{ color: "red" }}>{DateError}</p>}
                        
                    </div>

                    <div className='flex'>
                        {/* Submit Button */}
                        <button
                            onClick={(e) => HandleSubmit(e)}
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

export default Create
