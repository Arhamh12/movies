import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navBar/Nav'
import Top from './components/topRated/Top'
import BestOfAction from './components/best/BestOfAction'
import  Johnny  from './johnWick.jpg'
import BoA from './components/best/BoA'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import  useFetchData  from './components/topRated/ApiFetrch'
const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en-US"
function Home() {
  const [data, loading] = useFetchData(url);
  
  return (
    <>
    <BestOfAction movie ={data} loads = {loading}/>
    </>
  )
}

export default Home
