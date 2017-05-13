import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Landing from './Landing'
import Dashboard from './Dashboard'


const Home = ({ name }) => name ? <Dashboard /> : <Landing />

export default Home
