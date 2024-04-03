import React from 'react'
import Navbar from './component/navbar/navbar'
import { Alertbar } from './component/navbar/Alertbar'
import MainContent from './component/main/MainContent'


const Home = () => {
  return (
    <div>
       <Alertbar/>
        <Navbar/>
        <MainContent/>
        
    </div>
  )
}

export default Home