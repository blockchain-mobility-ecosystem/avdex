import React from 'react'
import { Container } from 'semantic-ui-react'

import Landing from './Landing'
import Dashboard from './Dashboard'


const Home = ({ name }) => name ? <Container><Dashboard /></Container> : <Landing />

export default Home
