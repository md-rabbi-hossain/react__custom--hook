import { useState } from 'react'
import './App.css'
import Fetchdata from './Component/Fetchdata'
// import Counter from './Component/Counter'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Fetchdata />
      {/* <Counter /> */}
    </>
  )
}

export default App
