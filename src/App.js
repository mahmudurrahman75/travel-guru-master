import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import CoxsBazar from './components/CoxsBazar/CoxsBazar';
import Sreemongol from './components/Sreemongol/Sreemongol';
import Sundorbon from './components/Sundorbon/Sundorbon';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   
        <Router>
          <Switch>
            <Route path ="/home">
              <Home></Home>
            </Route>
            <Route path="/coxsbazar">
              <CoxsBazar></CoxsBazar>
            </Route>
            <Route path ="/sreemongol">
              <Sreemongol></Sreemongol>
            </Route>
            <Route path="/sundorbon">
              <Sundorbon></Sundorbon>
            </Route>
            <PrivateRoute path ="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
      
  );
}

export default App;
