import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Warmup from './Warmup';
import warmupsData from './data'
import { useState } from 'react';

function App() {
  const [warmup, setWarmup] = useState('')

  function generateWarmup() {
    const randomWarmup = warmupsData[Math.floor(Math.random()*warmupsData.length)]
    setWarmup(randomWarmup)
  } 

  return (
    <div className="App">
      <h1>Warm Up Wheel of Fortune</h1>
      <Link to='/warmup' onClick={generateWarmup} warmup={warmup}>Spin the warm up wheel of fortune!</Link>
    
      <Routes>
        <Route path='/warmup' element={<Warmup warmup={warmup}/>} />
      </Routes>
    </div>
  );
}

export default App;
