import { Counter } from './Counters.jsx'
import { useState, useEffect } from 'react'
import  NewCounter  from './NewCounter.jsx'
import  NavBar  from './NavBar.jsx'
import {Header, Button} from './UIElements.jsx'

import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'


const Home = () => {
  const endM = 0
  const endD = 5
  const endY = 2025
  const endDate = [new Date(2031, 11, 22, 0, new Date().getMinutes(), new Date().getSeconds(), 0), new Date(2024, 0, 5, 0, 0, 0, 0), new Date(2028, 3, 25, 0, 0, 0, 0), new Date(2027, 6, 18, 0, 0, 0, 0)]

  return (
    <div>
      <Header text="Till I'm Out"/>
      <Counter endDate={endDate[1]}/>
    </div>
  )
}


export default Home