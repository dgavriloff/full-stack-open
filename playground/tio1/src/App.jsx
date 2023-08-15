const App = () => {
  
  
  const endM = 0
  const endD = 5
  const endY = 2025
  
  const endDate = new Date(endY, endM, endD)
  
  const dayType = 7

  const diffRMil = endDate.getTime() - Date.now()
  const diffRS = diffRMil / 1000
  const diffRMin = diffRS / 60
  const diffRH = diffRMin / 60
  const diffRD = diffRH / 24
  const diffRW = diffRD / 7
  const diffRMon = diffRD / 30
  const diffRY = diffRD / 365
  
  const finMils = diffRMil % 1000
  const finSecs = diffRS % 60
  const finMin = diffRMin % 60
  const finH = diffRH % 24
  const finD = diffRD
  const finW = diffRD / 7
  const finMon = diffRY % 12
  const finY = diffRY
  



  return (
    <div>
      <Header />
      <p>You have {diffRW} {diffRY} days left till you're out</p>
      <RawDateLine time = {finY} type = {"years"}/>
      <RawDateLine time = {finMon} type = {"months"}/>
      <RawDateLine time = {finW} type = {"weeks"}/>
      <RawDateLine time = {finD} type = {"days"}/>
      <RawDateLine time = {finH} type = {"hours"}/>
      <RawDateLine time = {finMin} type = {"Minutes"}/>
      <RawDateLine time = {finSecs} type = {"Seconds"}/>
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