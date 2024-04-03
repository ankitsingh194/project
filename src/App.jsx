import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Alertbar } from './component/navbar/Alertbar'
import Navbar from './component/navbar/navbar'
import MainContent from './component/main/MainContent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Alertbar/>
      <Navbar/>
      <MainContent/>
    
     
    </div>
  )
}

export default App
