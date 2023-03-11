import React from 'react'
import Cardwidget from '../widgets/Cardwidget'
import { useContext,useEffect,useState } from 'react'
import apiClient from '../shared/services/api-client'
import CONFIG from '../settings/config'
const Itemone = () => {
  const [loading,setLoad] = useState(true);
  const [data,setData] = useState([])
    const getProducts = async()=> {
      const Products = await apiClient.get(CONFIG.Product_API_URL)
      setData(Products.data['-NQF2FKDl_8GfQX2p14y'].studs)
      setLoad(false)
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
   <>
     {loading?<h1>loading...</h1>:
        <div className='gridClass'>
            {data.map((item, index) => (
              <Cardwidget key={index} card={item}/>
        ))}
        </div>
     }
   </>
  )
}

export default React.memo(Itemone)