import React from 'react'
import Cardwidget from '../widgets/Cardwidget'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '../modules/products/redux/product-slice'
import loader from '../assets/images/loading_gif_1_1.gif'


const Itemsecond = () => {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(state => state.products.isDataLoaded);
  var football = useSelector(state => state.products);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(getAllProducts());
    }
    else if(isDataLoaded){
        setLoad(false)
    }
  }, [dispatch, isDataLoaded]);

  const getBtnProp = (event) => {
    console.log(event.target);
  }

  return (
    <>
      {loading ? <div className='loaderContainer center_align'><h1>Loading...</h1></div> :
        <div className='gridClass'>
          {football.products.data['-NUbcIT_ETeqwfpFsiDW'].jersey.map((item, index) => (
            <Cardwidget key={index} card={item} operation={getBtnProp} />
          ))}
        </div>
      }
    </>
  )
}

export default React.memo(Itemsecond)