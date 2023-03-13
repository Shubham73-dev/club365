import React from 'react'
import Cardwidget from '../widgets/Cardwidget'
import { useEffect, useState } from 'react'
import apiClient from '../shared/services/api-client'
import CONFIG from '../settings/config'
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '../modules/products/redux/product-slice'


const Itemone = () => {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(state => state.products.isDataLoaded); 
  const [loading, setLoad] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const Products = await apiClient.get(CONFIG.Product_API_URL)
    setData(Products.data['-NQF2FKDl_8GfQX2p14y'].football)
    setLoad(false)
  }

  useEffect(() => {
    getProducts();
    if (!isDataLoaded) {
      dispatch(getAllProducts());
    }
  }, [dispatch, isDataLoaded]);

  const getBtnProp = (event) => {
    console.log(event.target);
  }

  return (
    <>
      {loading ? <h1>loading...</h1> :
        <div className='gridClass'>
          {data.map((item, index) => (
            <Cardwidget key={index} card={item} operation={getBtnProp} />
          ))}
        </div>
      }
    </>
  )
}

export default React.memo(Itemone)