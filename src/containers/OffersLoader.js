import { connect } from 'react-redux'
import Offers from '../components/Offers'


export default connect(
    store => ({
        list: store.offers.profiles[store.identity.keypair.publicKey] || [],
        data: store.offers.data
    })
)(Offers)
