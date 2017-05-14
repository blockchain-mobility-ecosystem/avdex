import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { fetchProfile } from '../actions'


export default connect(

    (state, ownProps) => ({
        ...state.profiles.data[ownProps.match.params.publicKey],
        publicKey: ownProps.match.params.publicKey,
        offers: state.offers.profiles[ownProps.match.params.publicKey] || [],
        data: state.offers.data
    }),

    dispatch => ({
        onMount: () => {}
    })

)(Dashboard)
