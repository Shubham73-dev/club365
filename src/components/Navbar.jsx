import React from 'react'
import Appbar from '../widgets/Appbar'
import Drawer from '../widgets/Drawer'
// import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Drawer />
            <Appbar />
            {/* <Outlet /> */}
        </>
    )
}

export default Navbar