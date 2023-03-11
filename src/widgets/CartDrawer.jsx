import React, { useState, useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../assets/styles/CartDrawer.css'
import '../styles/cart.css'
import dataContext from '../app/data-context';
import emptyCartImg from '../assets/images/empty_cart_img.png'
import { useSelector } from "react-redux";
import CartCard from '../widgets/CartCard'


const CartDrawer = () => {
    const cartValue = useContext(dataContext);
    const addedItems = useSelector(state => state.cartItems.cartItems);
    // console.log('hurray we got value****', addedItems);
    // const isLoading = useSelector(state=>state.users.isLoading);
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
            {addedItems.length ? addedItems.map((value, index) => {
                return (
                    <CartCard key={index} card={value.card.card} />
                )
            }) :
                <div className='cartcardContainer'>
                    <h2 style={{ textAlign: 'center' }}>Oops!!! Your Cart Is Empty</h2>
                    <img src={emptyCartImg} alt="empty cart" className='img-adj' />
                </div>}
        </div>
    );
    return (
        <>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        {<ShoppingCartIcon />}
                        {(cartValue.cart > 0) && <div className="cartValue">{cartValue.cart}</div>}
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