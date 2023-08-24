import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Pages/Main';
import Login from './Pages/LoginEmail';
import LoginPassword from './Pages/LoginPassword';
import Detail from './Components/Detail';
import { useState } from 'react';
import PrivateRouter from './Components/PrivateRouter';

function App() {
  // const [loginCheck, setLoginCheck] = useState(false)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/loginPw' element={<LoginPassword />} />
        {/* <Route path='/detail/:id' element={<Detail />} /> */}
        <Route path='/detail/:id' element={<PrivateRouter/>}/>
      </Routes>
    </div>
  );
}

export default App;
