import  dateDifference  from '../../scripts/dateDifference.js'
import getCounters from '../../scripts/getCounters.jsx'
import { useState, useEffect } from 'react'
import './counters.css'

export const Counter = ({endDate}) => {
  const [ currDate, setCurrDate] = useState(new Date())
  const [ selectedCounter, setSelectedCounter] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date())
    }, 999)

    return () => clearInterval(interval)
  }, [currDate])

  const dateDiff = dateDifference(currDate, endDate)
  const CurrCounter = getCounters(currDate, endDate)[selectedCounter]

  const handleClick = () => selectedCounter < dateDiff.length-1 ? setSelectedCounter(selectedCounter + 1) : setSelectedCounter(0)
  return( 
    <div className='counter'>
      <div className='numbers'><CurrCounter arr = {dateDiff[selectedCounter]()}/></div>
      <hr />
      <button onClick={handleClick}>Change format</button>
      <hr />
    </div>
  )
}


export const SingleCounter = ({time, type}) => {
    return (
      <td>
        <span className='time'>{time}</span> 
          <br />
        <span className='timeType'>{time == 1 ? type.slice(0,-1) : type}</span>
      </td>
    )
}
  
export const YDHMS = ({arr}) => {
  return (
    <table>
      <tbody>
        <tr>
          <SingleCounter time = {arr[0][0]} type = {arr[1][0]}/>
          <SingleCounter time = {arr[0][1]} type = {arr[1][1]}/>
          <SingleCounter time = {arr[0][2]} type = {arr[1][2]}/>
          <SingleCounter time = {arr[0][3]} type = {arr[1][3]}/>
          <SingleCounter time = {arr[0][4]} type = {arr[1][4]}/>
        </tr>
      </tbody>
    </table>
  )
}
export const DHMS = ({arr}) => {
  return (
    <table>
      <tbody>
        <tr>
          <SingleCounter time = {arr[0][0]} type = {arr[1][0]}/>
          <SingleCounter time = {arr[0][1]} type = {arr[1][1]}/>
          <SingleCounter time = {arr[0][2]} type = {arr[1][2]}/>
          <SingleCounter time = {arr[0][3]} type = {arr[1][3]}/>
        </tr>
      </tbody>
    </table>
  )
}
export const HMS = ({arr}) => {
  return (
    <table>
      <tbody>
        <tr>
          <SingleCounter time = {arr[0][0]} type = {arr[1][0]}/>
          <SingleCounter time = {arr[0][1]} type = {arr[1][1]}/>
          <SingleCounter time = {arr[0][2]} type = {arr[1][2]}/>
        </tr>
      </tbody>
    </table>
  )
}
export const MS = ({arr}) => {
  return (
    <table>
      <tbody>
        <tr>
          <SingleCounter time = {arr[0][0]} type = {arr[1][0]}/>
          <SingleCounter time = {arr[0][1]} type = {arr[1][1]}/>
        </tr>
      </tbody>
    </table>
  )
}

export const S = ({arr}) => {
  return (
    <table>
      <tbody>
        <tr>
          <SingleCounter time = {arr[0][0]} type = {arr[1][0]}/>
        </tr>
      </tbody>
    </table>
  )
}