import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))

  const handleVoting = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }
  const mostVoted = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <Header text="Anecdote of the Day" />
      <DisplayAnecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={handleVoting} text="vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 8))} text="next anecdote"/>
      <Header text="Anecdote with most votes" />
      <DisplayAnecdote anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]}/>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const DisplayAnecdote = ({anecdote, votes}) => {
  return  (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

export default App
