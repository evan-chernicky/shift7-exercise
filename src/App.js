import React from 'react'
import Header from './components/header/Header.js'
import './App.css';


function App() {
  return (
    <div className="App min-h-screen bg-gray-400 pt-32 ">
      <Header />
      <div className="container m-auto text-center text-4xl bg-gray-400">
        <h1>Content</h1>
        </div>
    </div>
  );
}

export default App;
