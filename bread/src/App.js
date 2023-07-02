import React, {useState, useEffect} from 'react'
import './App.css'
import Bake from './components/Bake'
import Chart from './components/Chart'
import Clock from './components/Clock'
import Top from './components/Top'

const App = () => {
  /**
  useEffect(() => {
    fetch('http://localhost:5000/foo')
    .then(res => res.json())
    .then(res => { setMsg(res.msg) })
    .catch(e => console.log(e))
  }, [])
  //*/

  return (
    <div className="Bread">
      <Top />
      <Chart />
      <Clock />
      <Bake />
    </div>
  )
}

export default App

