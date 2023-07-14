import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Masterdata from './pages/Masterdata/Masterdata';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Navbar>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/masterdata" component={Masterdata}/>
                </Navbar>
            </Switch>
        </Router>
    </div>
    
      
  )
}

export default App

