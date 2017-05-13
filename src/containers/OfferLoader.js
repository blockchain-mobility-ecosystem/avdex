import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { submitOffer } from '../actions'
import OfferForm from '../components/Offer'


export default connect(

    store => {},

    dispatch => ({
        onSubmit: values => {
            dispatch(submitOffer(values))
            dispatch(push('/'))
        }
    })

)(OfferForm)
