import { connect } from 'react-redux'
import Home from '../components/Home'


export default connect(
    state => ({
        ...state.identity.profile
    })
)(Home)
