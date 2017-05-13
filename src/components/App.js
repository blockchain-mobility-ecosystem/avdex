import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/Home';
import WalletLoader from '../containers/WalletLoader';
import ProfileLoader from '../containers/ProfileLoader';
import MenuLoader from '../containers/MenuLoader';


const App = () => (
    <div>
        <MenuLoader />
        <Route exact path="/" component={Home}/>
        <Route path="/profile/edit" component={ProfileLoader}/>
        <Route path="/wallet" component={WalletLoader}/>
    </div>
)

export default App
