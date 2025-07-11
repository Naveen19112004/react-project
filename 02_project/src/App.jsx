import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const addvalue = () => {
    console.log("incrementing value");
    setCounter(counter + 1);
    console.log("incremented value is ", counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <button onClick={addvalue}>increment</button>
      <h2>counterv alue:{counter}</h2>
    </>
  )
}

export default App
