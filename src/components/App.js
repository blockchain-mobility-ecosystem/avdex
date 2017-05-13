import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HomeLoader from '../containers/HomeLoader'
import WalletLoader from '../containers/WalletLoader'
import ProfileLoader from '../containers/ProfileLoader'
import OfferLoader from '../containers/OfferLoader'
import OffersLoader from '../containers/OffersLoader'
import MenuLoader from '../containers/MenuLoader'


const App = () => (
    <div>
        <MenuLoader />
        <Container>
            <Route exact path="/" component={HomeLoader}/>
            <Route path="/offers/add" component={OfferLoader}/>
            <Route path="/offers" component={OffersLoader}/>
            <Route path="/profile/edit" component={ProfileLoader}/>
            <Route path="/wallet" component={WalletLoader}/>
        </Container>
    </div>
)

export default App
