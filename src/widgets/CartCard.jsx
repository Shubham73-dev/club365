import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const CartCard = ({ card }) => {
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
                    <Button size="small" onClick={card.operation}>
                        {'Remove from Cart'}
                    </Button>
                    <input type="number" name="" id="" min={1} value={value} onChange={handleChange} />
                </CardActions>
            </Card>
        </>
  )
}

export default CartCard