import React, { useState,useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../assets/styles/CartDrawer.css'
import '../styles/cart.css'
import dataContext from '../app/data-context';


const CartDrawer = () => {
    const cartValue = useContext(dataContext);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div className='cartDrawerContainer'>
            <div className='cartcardContainer'>
                Your Cart is Empty
            </div>
            <Button variant="contained" color="success">
                Proceed To Checkout
            </Button>
        </div>
    );
    return (
        <>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        {<ShoppingCartIcon />}
                        {(cartValue.cart>0) && <div className="cartValue">{cartValue.cart}</div>}
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    )
}

export default CartDrawer