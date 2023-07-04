import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Navbar2 from './Components/Navbar2';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path='/' element={<ProductAll />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
