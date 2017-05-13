import { connect } from 'react-redux'
import AppMenu from '../components/Menu'


export default connect(
    state => ({
        ...state.identity.profile,
        offers: state.offers
    })
)(AppMenu)
