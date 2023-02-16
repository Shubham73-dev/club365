import React, { useState,useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link,useParams  } from 'react-router-dom';
import '../assets/styles/Appbar.css'

const Linktab = (props)=> {
  return(
    <Tab component={Link} to={props.pathname} {...props} />
  )
}

const Appbar = () => {
  const {mode} = useParams ();
  useEffect(() => {
    console.log('**********',{mode});
    const getCurrentTab = parseInt(sessionStorage.getItem('tabValue')) 
    setValue(getCurrentTab);
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    sessionStorage.setItem('tabValue', newValue);
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Linktab label="Item One" pathname="/" className="sigleFlex"/>
        <Linktab label="Item two" pathname="itemsecond" className="sigleFlex"/>
        <Linktab label="Item three" pathname="itemthird" className="sigleFlex"/>
      </Tabs>
    </>
  )
}

export default Appbar