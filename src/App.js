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
import Settings from './pages/Settings/Settings';

const App = () => {
  const [color,setColor] = useState("bg-gray-900")

  return (
    <div className='w-full'>
        <Router>
            <Switch>
                <Route path="/login">
                  <Login color={color}/>
                </Route>
                <Navbar color={color}>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/masterdata" component={Masterdata}/>
                  <Route path="/settings" component={Settings}>
                    <Settings setColor={setColor}/>
                  </Route>
                </Navbar>
            </Switch>
        </Router>
    </div>  
  )
}

export default App

