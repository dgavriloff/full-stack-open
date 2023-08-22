import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const avg = ((good) + (bad * -1)) / all
  const positive = good / all * 100

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={ () => setGood(good + 1)}/>
      <Button text="neutral" handleClick={ () => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={ () => setBad(bad + 1)}/>
      <Header text="statistics"/>
      <AllStats good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive}/>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick} >{text}</button>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistic = ({text, number, extra}) => {
  return (
    <tr>
    <td>
      {text}
    </td>
    <td>
      {number}
    </td>
    <td>
      {extra}
    </td>
    </tr>

  )
}

const AllStats = ({good, neutral, bad, all, avg, positive}) => {
  return all == 0 ?  <div>No feedback given</div> :
  (
    <table>
      <tbody>
        <Statistic text="good" number={good}/>
        <Statistic text="neutral" number={neutral}/>
        <Statistic text="bad" number={bad}/>
        <Statistic text="all" number={all} />
        <Statistic text="avg" number={avg.toFixed(1)} />
        <Statistic text="positive" number={positive.toFixed(1)} extra=" %"/>       
      </tbody>
    </table>
  )
}

export default App