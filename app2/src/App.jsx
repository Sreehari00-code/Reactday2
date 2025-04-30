import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginmui from './components/Loginmui'
import Signupmui from './components/Signupmui'
import Navbar from './components/Navbar'
import MuiTable from './components/MuiTable'
import MuiCard from './components/MuiCard'
import MuiGridCard from './components/MuiGridCard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
   
 
<Navbar/>
     <Routes>
    
      <Route path='/' element={<MuiCard/>}/>
      <Route path='/e' element={<Loginmui/>}/>
      <Route path='/c' element={<MuiTable/>}/>
      <Route path='/f' element={<Navbar/>}/>
      <Route path='/n' element={<MuiGridCard/>}/>

     


     </Routes>
    </>
)
}


export default App
