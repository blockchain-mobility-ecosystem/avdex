import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Landing = ({name}) => (
    <div>
        <h1>Secure. Decentralized. Open.</h1>
        <Button as={Link} to="/wallet">
            Connect to your digital wallet.
        </Button>
        <Button as={Link} to="/profile/edit">
            Create your profile.
        </Button>
    </div>
)

export default Landing
