import React from 'react'
import Drawer from '../widgets/Drawer'
import CartDrawer from '../widgets/CartDrawer';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/images/Club365.jpg'
import Button from '@mui/material/Button';
import '../assets/styles/TopHeader.css'


const TopHeader = () => {
  return (
    <div className='topHeaderContainer'>
        <Drawer />
        <div className="logoContainer">
            <img src={logo} alt="logo" />
        </div>
        <div className="cartprofileContainer">
            <CartDrawer/>
            <div className="profileContainer">
                <PersonIcon/>
                <Button variant="contained">Login</Button>
            </div>
        </div>
    </div>
  )
}

export default TopHeader