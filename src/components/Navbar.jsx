import React from 'react'
import Appbar from '../widgets/Appbar'
import TopHeader from './TopHeader'
// import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <TopHeader />
            <Appbar />
            {/* <Outlet /> */}
        </>
    )
}

export default Navbar