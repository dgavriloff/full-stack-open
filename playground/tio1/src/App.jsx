import { Counter } from './components/Counters.jsx'
import { useState, useEffect } from 'react'


const App = () => {
  const endM = 0
  const endD = 5
  const endY = 2025
  const endDate = [new Date(2031, 11, 22, 0, new Date().getMinutes(), new Date().getSeconds(), 0), new Date(2024, 0, 5, 0, 0, 0, 0), new Date(2028, 3, 25, 0, 0, 0, 0), new Date(2027, 6, 18, 0, 0, 0, 0)]

  return (
    <div>
      <Header text="Till I'm Out"/>
      {endDate.map(e => <li><Counter endDate={e}/></li>)}
    </div>
  )
}


const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}



export default App