import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginRegister from './LoginRegister.js';

const Main = () => {
   return <Router>
    <Route exact path="/" component={LoginRegister} />
   </Router>
}

export default Main;