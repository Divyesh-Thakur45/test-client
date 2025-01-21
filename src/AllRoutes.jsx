import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import NoPage from './Pages/NoPage'
import Create from './Pages/Create'
import Update from './Pages/Update'
import Signin from './Pages/Signin'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Create" element={<Create />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Update/:userId" element={<Update />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes