import { Route, Routes } from "react-router-dom"
import Itemone from '../../components/Itemone'
import Itemsecond from '../../components/Itemsecond'
import Itemthird from '../../components/Itemthird'
import Error from '../../shared/components/Error'

export const Approutes = ()=> {
    return(
        <Routes>
            <Route path="/club365" element={<Itemone/>}/>
            <Route path="itemsecond" element={<Itemsecond/>}/>
            <Route path="itemthird" element={<Itemthird/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}