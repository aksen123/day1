import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import New from './Pages/New';
import Edit from './Pages/Edit';
import { getEmotionImgById } from './Component/Util';
import {Routes, Route, Link} from 'react-router-dom'
// Routes : 부모 /  Route : 자식
function App() {
  return (
    <div className="App">
      {/* <img src={getEmotionImgById(1)} alt="감정1" />
      <img src={getEmotionImgById(2)} alt="감정2" />
      <img src={getEmotionImgById(3)} alt="감정3" />
      <img src={getEmotionImgById(4)} alt="감정4" />
      <img src={getEmotionImgById(5)} alt="감정5" /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/New' element={<New />}/>
        <Route path='/Diary/:id' element={<Diary />}/>
        {/*  */}
        <Route path='/Edit' element={<Edit />}/>
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/New"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
        <Link to={"/Edit"}>Edit</Link>
      </div>
    </div>
  );
}

export default App;
