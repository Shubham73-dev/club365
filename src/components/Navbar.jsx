import React,{useEffect, useState} from 'react'
import Appbar from '../widgets/Appbar'
import TopHeader from './TopHeader'
// import dataContext from '../app/data-context'
const Navbar = () => {
    // const [cart,setCart] = useState(2)
    return (
        <div id='navBar'>
            <TopHeader />
            {/* <dataContext.Provider value={{cart:cart,setCart:setCart}}> */}
                <Appbar />
            {/* </dataContext.Provider> */}
        </div>
    )
}
export default Navbar