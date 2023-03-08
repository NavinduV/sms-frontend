import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import {UserContext, UserContextProvider} from './components/UserContext';
import AccountPage from './pages/AccountPage';
import AppointmentPage from './pages/AppointmentPage';
import { useContext } from 'react';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        
          <Route path='/' element={<IndexPage />} />
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/appointment' element={<AppointmentPage />}/>
          <Route path='/account/:subpage?' element={<AccountPage/>} />
          <Route path='/account/:subpage/:action?' element={<AccountPage/>} />
        </Route>  
      </Routes>
    </UserContextProvider>

    
  )
}

export default App
