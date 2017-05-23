import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Landing = ({name}) => (
    <div className="full-page">
        <div className="main">
            <h1>AVDEX // Autonomous Vehicles Data Exchange</h1>
            <p>AVDEX stands for <strong>A</strong>utonomous <strong>V</strong>ehicle <strong>D</strong>ata <strong>Ex</strong>change. It is the first decentralized data exchange platform that connects producers and consumers to exchange data–sets in a secure, privacy–oriented fashion.</p>

            <h2>Secure. Decentralized. Open.</h2>
            <p>
                <ul>
                    <li><strong>Secure</strong>: Every transaction in the system is cryptographically signed.</li>
                    <li><strong>Decentralized</strong>: We run on <a href="https://www.bigchaindb.com">BigchainDB</a>, a scalable decentralized database.</li>
                    <li><strong>Open</strong>: Everybody can join the exchange.</li>
                </ul>
            </p>

            <Button primary as={Link} to="/wallet">
                Connect to your digital wallet.
            </Button>
        </div>
    </div>
)

export default Landing
