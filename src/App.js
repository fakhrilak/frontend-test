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

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
      <Wrapper>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
      </Wrapper>
    </div>
    
      
  )
}

export default App

