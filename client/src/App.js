import Public from './pages/Public';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';

function App() {
  const content = 
  <Routes>
    {/* public routes */}
    <Route path="/" element={<Public/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    {/* private routes */}
  </Routes>


  return content;
}

export default App;
