const Hello = (props) => {
  return (
    <div>
      <p>Hello World {props.name} {props.age}</p>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name='Denis'/>
      <Hello />
      <Hello />
    </div>
  )
}

export default App