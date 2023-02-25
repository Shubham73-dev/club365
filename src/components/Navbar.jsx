import React,{useEffect, useState} from 'react'
import Appbar from '../widgets/Appbar'
import TopHeader from './TopHeader'
import dataContext from '../app/data-context'
const Navbar = () => {
    const [data,setData] = useState([])
    return (
        <>
            <TopHeader />
            <dataContext.Provider value={{data:data,setData: setData}}>
                <Appbar />
            </dataContext.Provider>
        </>
    )
}
export default Navbar