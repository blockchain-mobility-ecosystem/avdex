import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Home = () => (
    <div>
        <h1>Secure. Decentralized. Open.</h1>
        <Button>
            <Link to="/wallet">
                Connect to your digital wallet.
            </Link>
        </Button>
    </div>
)

export default Home;
