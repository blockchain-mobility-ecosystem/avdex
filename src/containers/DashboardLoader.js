import { connect } from 'react-redux'
import Offers from '../components/Offers'


export default (publicKey) => {
    connect(
        state => ({
            ...state.identity.profile
        })
    )(Offers)
}
