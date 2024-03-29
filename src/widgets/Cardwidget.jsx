import React, { useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import dataContext from '../app/data-context';
import { useDispatch,useSelector } from "react-redux";
import { add,remove } from "../modules/cart/redux/cart-slice.js";
import { addstat,removestat } from "../modules/card/redux/card-button-slice";


const Cardwidget = ({ card }) => {
    // const [clicked, setClicked] = useState(false);
    const clicked = useSelector((state) => state.cardButtons.buttons[card.product_Id] ?? false);
    const cartValue = useContext(dataContext);
    const dispatch = useDispatch(); // React Redux Predefine Hook

    const handleClick = (card) => {
        dispatch(addstat({ id: card.card.product_Id }));
        cartValue.setCart(cartValue.cart + 1)
        // console.log(card);
        dispatch(add({card}));
    };
    const unHandledClick = (card) => {
        // setClicked(!clicked);
        dispatch(removestat({ id: card.card.product_Id }));
        cartValue.setCart(cartValue.cart - 1)
        // console.log(card);
        dispatch(remove({card}));
    };
    return (
        <>
            <Card sx={{ maxWidth: 345 }} id={card.product_Id} style={{cursor:"pointer"}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={card.thumbnailUrl}
                    title={card.titleName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {card.titleName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {card.productDecription}
                    </Typography>
                </CardContent>
                <CardActions style={{ columnGap: "1rem" }}>
                    <Typography variant="h5" component="div"><CurrencyRupeeIcon />{card.productPrice}</Typography>
                    <Button id={card.product_Id} size="small" onClick={clicked ? () => unHandledClick({ card }) : () => handleClick({ card })}>
                        {clicked ? 'Remove from Cart' : 'Add to Cart'} 
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cardwidget
