import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services'
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/appointment' element={
        <PrivateRoute>
          <Appointment></Appointment>
        </PrivateRoute>
        } />
        </Routes>
        <Footer></Footer>
      </Router>

      </AuthProvider>
      
    </>
  );
}

export default App;
