import Public from './pages/Public';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  const content = 
  <Routes>
    {/* public routes */}
    <Route path="/" element={<Public/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/forgot-password" element={<ForgotPassword/>} />
    <Route path="/reset-password/:token" element={<ResetPassword/>} />
    {/* private routes */}
    <Route path="/profile" element={<Profile/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
  </Routes>


  return content;
}

export default App;
