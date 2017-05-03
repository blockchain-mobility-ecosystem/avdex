import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Home from './Home';
import Wallet from './Wallet';


const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/wallet" component={Wallet}/>
        </div>
    </Router>
);


export default App;
