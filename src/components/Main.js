import React from 'react';
import { Switch, Route } from "react-router-dom";
import LoginRegister from './LoginRegister.js';
import Threads from './Threads.js';
import CreateThread from './CreateThread.js';
import Header from './Header';

const Main = () => {
   return <Switch>
   <div className='main-wrapper'>
    <Header />
    <Route exact path="/" component={LoginRegister} />
    <Route exact path="/thread/list" component={Threads} />
    <Route exact path="/thread/create" component={CreateThread} />
    </div>
   </Switch>
}

export default Main;