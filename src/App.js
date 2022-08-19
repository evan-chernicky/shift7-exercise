import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header.js'
import Page from './components/Page.js'
import './App.css';


function App() {
  return (
    <div className="App min-h-screen bg-gray-400 pt-32 ">
      <Header />
      <Routes>
        <Route path=":page" element={<Page />} />
        <Route path=":solutions/:page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
