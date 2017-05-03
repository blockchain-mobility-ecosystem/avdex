import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Home from './Home';
import WalletLoader from '../containers/WalletLoader';


const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/wallet" component={WalletLoader}/>
        </div>
    </Router>
);


export default App;
