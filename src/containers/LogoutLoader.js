import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions'


export default connect()(() => { logout(); return <p>logout...</p>})
