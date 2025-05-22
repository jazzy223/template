import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import OtherLayout from "../components/otherlayout/OtherLayout.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";
import Notfound from "../pages/notfound/Notfound.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home/>}/>
                </Route>
                <Route element={<OtherLayout/>}>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/wislist' element={<Wishlist/>}/>
                </Route>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router
