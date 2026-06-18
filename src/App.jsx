import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
 
const Card = ({title }) => {
  const [hasLiked, setHasLiked] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => { hasLiked ? console.log('You liked', title) : console.log('You unliked', title) })
  return (
    <div className="Card" onClick={() => setCount(count + 1)}>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
      <p>Count: {count}</p>
    </div>
  )
}
const App = () => {
  return( 
    <div className="App">
    <h2> Arrow function </h2>
    <Card title="Breaking Bad" description="Card description" />
    <Card title="Better Call Saul" description="Card description" />
    <Card title="The Wire" description="Card description" />
    </div>
  )
}

export default App
