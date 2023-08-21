import  dateDifference  from '../scripts/dateDifference.js'
import { useState, useEffect } from 'react'


const App = () => {
  const endM = 0
  const endD = 5
  const endY = 2025
  const endDate = new Date(endY, endM, endD, 0, 0, 0, 0)
  const [ currDate, setCurrDate] = useState(new Date())
  
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrDate(new Date())
    }, 999)

    return () => clearInterval(interval)
  }, [currDate])
  
  const dateDiff = dateDifference(currDate, endDate);
  

  return (
    <div>
      <Header />
      <FullTime arr = {dateDiff.ydhms()}/>
      <Button handleClick={() => setCurrDate(new Date())} text="Refresh"/>
    </div>
  )
}

const FullTime = ({arr}) => {
  return(
    <div>
    <TimeType time = {arr[0][0]} type = {arr[1][0]}/>
    <TimeType time = {arr[0][1]} type = {arr[1][1]}/>
    <TimeType time = {arr[0][2]} type = {arr[1][2]}/>
    <TimeType time = {arr[0][3]} type = {arr[1][3]}/>
    <TimeType time = {arr[0][4]} type = {arr[1][4]}/>
    </div>    
  )
}

const Header = () => {
  return (
    <h1>Till I'm Out</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const TimeType = ({ time, type}) => {
  return (
    <p>{time} {type}</p>
  )
}

export default App