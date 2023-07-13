import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import Wrapper from './components/Wrapper/Wrapper';
import Login from './pages/Login/Login';
import Tesrest from './pages/test';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>  
                <Wrapper>
                  <Route path="/dashboard" component={Home}/>
                  <Route path="/test" component={Tesrest}/>
                </Wrapper>
            </Switch>
        </Router>
    </div>
    
      
  )
}

export default App

