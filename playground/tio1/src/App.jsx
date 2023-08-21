import  dateDifference  from '../scripts/dateDifference.js'

const App = () => {
  
  
  const endM = 0
  const endD = 5
  const endY = 2024
  const endDate = new Date(endY, endM, endD, 0, 0, 0, 0)
  const currDate = new Date()
  
  
  const dateDiff = dateDifference(currDate, endDate);
  



  return (
    <div>
      <Header />
      <RawDateLine time = {dateDiff.dhms()[0][3]} type = {dateDiff.dhms()[1][3]}/>
    </div>
  )
}

const RawDateLine = (props) => {
  return(
    <p>You have {Math.floor(props.time)} {props.type} left till you're out</p>
  )
}

const Header = () => {
  return (
    <h1>Till I'm Out</h1>
  )
}

export default App