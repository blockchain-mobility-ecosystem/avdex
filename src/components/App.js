import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HomeLoader from '../containers/HomeLoader'
import WalletLoader from '../containers/WalletLoader'
import ProfileLoader from '../containers/ProfileLoader'
import SearchLoader from '../containers/SearchLoader'
import OfferLoader from '../containers/OfferLoader'
import OffersLoader from '../containers/OffersLoader'
import MenuLoader from '../containers/MenuLoader'
import LogoutLoader from '../containers/LogoutLoader'


const App = () => (
    <div>
        <MenuLoader />
        <Container>
            <Route exact path="/" component={HomeLoader}/>
            <Route path="/offers/add" component={OfferLoader}/>
            <Route path="/offers" component={OffersLoader}/>
            <Route path="/profile/edit" component={ProfileLoader}/>
            <Route path="/wallet" component={WalletLoader}/>
            <Route path="/search" component={SearchLoader}/>
            <Route path="/logout" component={LogoutLoader}/>
        </Container>
    </div>
)

export default App
