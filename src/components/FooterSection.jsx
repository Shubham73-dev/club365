import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/footer.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

const FooterSection = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <footer id='footer'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item className='footerCards'>
                            <div className="footerCardContents">
                                <div className="footerCardContent"><CallIcon /> : +91-7814587230</div>
                                <div className="footerCardContent"><EmailIcon /> : shubhamshrivastav16@gmail.com</div>
                                <div className="footerCardContent"><Button href="tel:+917814587230" onclick="window.location = 'tel:+917814587230';" variant="contained">Tap To Call</Button></div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item className='footerCards'>
                            <div className="footerCardContents">
                                <Link href="#" underline="none">
                                    <div className="footerCardContent"><LinkedInIcon /> &nbsp; Catch Me On Linkedin</div>
                                </Link>
                                <Link href="#" underline="none">
                                    <div className="footerCardContent"><InstagramIcon /> &nbsp; Catch Me On Instagram</div>
                                </Link>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item className='footerCards'>
                            <div className="footerCardContents">
                                <div className="footerCardContent">Shubham Shrivastav</div>
                                <div className="footerCardContent">React.js Developer</div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </footer>

    )
}

export default FooterSection