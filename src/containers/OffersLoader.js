import { connect } from 'react-redux'
import Offers from '../components/Offers'


export default connect(
    store => ({
        list: store.offers.mine,
        data: store.offers.data
    })
)(Offers)
