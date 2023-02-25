import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Cardwidget = ({ card,operation }) => {
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
                    <Button size="small" onClick={operation}>Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cardwidget