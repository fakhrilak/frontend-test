import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Tesrest from './pages/test';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Navbar>
                  <Route path="/dashboard" component={Home}/>
                  <Route path="/test" component={Tesrest}/>
                </Navbar>
            </Switch>
        </Router>
    </div>
    
      
  )
}

export default App

