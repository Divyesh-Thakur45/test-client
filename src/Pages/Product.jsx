import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
import SweetAlert2 from 'react-sweetalert2';

const Product = () => {
    const [data, setData] = useState([])
    const [swalProps, setSwalProps] = useState({});
    const getData = () => {
        axios.get("http://localhost:8080/product/GetAllProducts/1", {
            withCredentials: true,
        }).then((res) => setData(res.data.message))
            .catch((err) => console.log(err))
    }
    const deleteData = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8080/product/DeleteProducts/${id}`)
            .then((res) => (
                console.log("Product deleted successfully !"),
                getData()
            ))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className="p-4 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Page</h1>
                <p className="text-lg text-gray-600">This is the product page.</p>
            </div>
            <div className='grid grid-cols-3'>
                {data.map(({ image, email, password, gender, age, date, _id }) => (
                    <div
                        key={_id}
                        className="p-6 bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-shadow m-5 max-w-sm w-full mx-auto"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={`http://localhost:8080/${image}`}
                                alt={email}
                                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300 shadow-sm"
                            />
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                                Mail: <span className="text-indigo-600">{email}</span>
                            </h2>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                            Gender: <span className="font-medium text-gray-900">{gender}</span>
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                            Age: <span className="font-medium text-green-600">{age}</span>
                        </p>
                        <p className="text-sm text-gray-600">
                            BDY: <span className="font-medium text-gray-900">{date}</span>
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button
                                onClick={() => {
                                    deleteData(_id);
                                    setSwalProps({
                                        show: true,
                                        title: 'Conform To Delete',
                                        text: 'Delete 👍',
                                    })
                                }}
                                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                            >
                                Delete
                            </button>
                            <SweetAlert2 {...swalProps} />
                            <NavLink to={`/Update/${_id}`}>
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                >
                                    Update
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Product