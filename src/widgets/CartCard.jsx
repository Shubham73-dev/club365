import React, { useState,useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { addstat,removestat } from "../modules/card/redux/card-button-slice";
import { add,remove } from "../modules/cart/redux/cart-slice.js";
import { useDispatch,useSelector } from "react-redux";
import dataContext from '../app/data-context';




const CartCard = ({ card }) => {
    const clicked = useSelector((state) => state.cardButtons.buttons[card.product_Id] ?? false);
    const dispatch = useDispatch();
    const cartValue = useContext(dataContext);
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
    const [value, setValue] = useState('1');
    function handleChange(event) {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
      }
  return (
    <>
            <Card id={card.product_Id} style={{marginBottom:"1rem"}}>
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
                <CardActions style={{ columnGap: "1rem" }} className="cartCardWidgets">
                    <Typography variant="h5" component="div"><CurrencyRupeeIcon />{card.productPrice}</Typography>
                    {/* <Button size="small" onClick={card.operation}>
                        {'Remove from Cart'}
                    </Button> */}
                    <Button id={card.product_Id} size="small" onClick={clicked ? () => unHandledClick({ card }) : () => handleClick({ card })}>
                        {clicked ? 'Remove from Cart' : 'Add to Cart'} 
                    </Button>
                    <input type="number" name="" id="" min={1} value={value} onChange={handleChange} />
                </CardActions>
            </Card>
        </>
  )
}

export default CartCard