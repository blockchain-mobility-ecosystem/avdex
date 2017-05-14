import React from 'react'

import Landing from './Landing'
import Dashboard from './Dashboard'


const Home = ({ name }) => name ? <Dashboard /> : <Landing />

export default Home
