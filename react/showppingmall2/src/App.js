import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Pages/Main';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/> 
        <Route path='/login' element={<Login />}/> 
      </Routes>
    </div>
  );
}

export default App;
