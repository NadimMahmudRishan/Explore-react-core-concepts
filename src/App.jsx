import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>This is My first react program</p>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>

  )
}

function Student() {
  const Students = { Name: "Rishan", Age: 22 };
  return (
    <>
      <div className='student'>
    <p>The name of the student is {Students.Name} and his age is {Students.Age}.</p>
    <p>The name of the student is {Students.Name} and his age is {Students.Age}.</p>
    <p>The name of the student is {Students.Name} and his age is {Students.Age}.</p>
    </div>
    </>
  )
}

export default App
