import { connect } from 'react-redux'
import AppMenu from '../components/Menu'


export default connect(
    state => ({
        ...state.profiles.data[state.identity.keypair.publicKey],
        offers: state.offers
    })
)(AppMenu)
