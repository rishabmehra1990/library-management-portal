import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Banner from './components/Banner/Banner'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/util/ProtectedRoute';
import AddBook from './components/AddBook/AddBook';
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              Component={Dashboard}
              authCheckUrl="http://localhost:4000/auth/dashboard"
            />
          }
        />
        <Route
          path="/dashboard/addbook"
          element={
            <ProtectedRoute
              Component={AddBook}
              authCheckUrl="http://localhost:4000/auth/dashboard"
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App;
