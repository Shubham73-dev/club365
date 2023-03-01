import React,{useState} from 'react'
import './App.css';
import '@fontsource/roboto/400.css';
import Home from './pages/Home'
import dataContext from './app/data-context'

function App() {
  const [cart,setCart] = useState(0);
  return (
    <dataContext.Provider value={{cart,setCart}}>
      <Home />
    </dataContext.Provider>
    
  );
}

export default App;
