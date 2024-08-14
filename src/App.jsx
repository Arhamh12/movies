import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navBar/Nav'
import Top from './components/topRated/Top'
import BestOfAction from './components/best/BestOfAction'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'
function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/movies/:id' Component={Movie}></Route>
      </Routes>
    </Router>
  )
}

export default App
