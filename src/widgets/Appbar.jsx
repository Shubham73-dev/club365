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

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Linktab label="FOOTBALL" pathname="/" className="sigleFlex"/>
        <Linktab label="JERSEY" pathname="itemsecond" className="sigleFlex"/>
        <Linktab label="STUDS" pathname="itemthird" className="sigleFlex"/>
      </Tabs>
    </>
  )
}

export default Appbar