import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/dashboard' element={<Layout><Dashboard /></Layout>}/>
    </Routes>
  );
}

export default App;
