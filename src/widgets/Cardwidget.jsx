import React, { useState,useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import dataContext from '../app/data-context';

const Cardwidget = ({ card }) => {
    const [clicked, setClicked] = useState(false);
    const cartValue = useContext(dataContext);
    const handleClick = () => {
        setClicked(!clicked);
        cartValue.setCart(cartValue.cart + 1)
      };
    const unHandledClick = () => {
        setClicked(!clicked);
        cartValue.setCart(cartValue.cart - 1)
      };
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={card.thumbnailUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {card.titleName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {card.productDecription}
                    </Typography>
                </CardContent>
                <CardActions style={{columnGap:"1rem"}}>
                    <Typography variant="h5" component="div"><CurrencyRupeeIcon />{card.productPrice}</Typography>
                    <Button size="small" onClick={clicked?unHandledClick:handleClick}>{clicked ? 'Remove from Cart' : 'Add to Cart'}</Button>
                    {/* <button onClick={handleClick}>
                        {clicked ? 'Remove from Cart' : 'Add to Cart'}
                    </button> */}
                </CardActions>
            </Card>
        </>
    )
}

export default Cardwidget