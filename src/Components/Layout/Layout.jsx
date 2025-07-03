import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
    const location = useLocation();
    
    // Define routes where footer should be hidden
    const hideFooterRoutes = ['/login', '/signup'];
    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

    return (
        <>
            <Navbar />
            <Outlet />
            {!shouldHideFooter && <Footer />}
        </>
    )
}