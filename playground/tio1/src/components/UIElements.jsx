import  NavBar from './NavBar.jsx'

export const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
      <NavBar />
    </div>

  )
}

export const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}
