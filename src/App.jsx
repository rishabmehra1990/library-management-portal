import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Banner from './components/Banner/Banner'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <Banner />
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
