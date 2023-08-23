import React from "react";
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'
import Home from './components/Home.jsx'
import NewCounter from "./components/NewCounter.jsx";


const App = () => {
  return(
    <Routes>
      <Route index element={<Home />}/>
      <Route path='quicktio' element={<NewCounter />}/>
    </Routes>
  )
}

export default App