const App = () => {
  
  
  const endM = 0
  const endD = 5
  const endY = 2024
  
  const endDate = new Date(endY, endM, endD)
  const diffRMil = endDate.getTime() - Date.now()
  const diffRS = diffRMil / 1000
  const diffRMin = diffRS / 60
  const diffRH = diffRMin / 60
  const diffRD = diffRH / 24
  const diffRMon = diffRD / 30
  const diffRW = diffRD / 7
  const diffRY = diffRD / 365
  



  return (
    <div>
      <Header />
      <p>You have {diffRW} {diffRY} days left till you're out</p>
    </div>
  )
}

const Header = () => {
  return (
    <h1>Till I'm Out</h1>
  )
}

export default App