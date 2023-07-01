import React, {useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/foo')
    .then(res => res.json())
    .then(res => { setMsg(res.msg) })
    .catch(e => console.log(e))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
      </header>
    </div>
  )
}

export default App

