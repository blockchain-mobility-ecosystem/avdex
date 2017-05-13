import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { submitProfile } from '../actions'
import ProfileForm from '../components/Profile'


export default connect(

    state => ({
        initialValues: state.identity.profile
    }),

    dispatch => ({
        onSubmit: values => {
            dispatch(submitProfile(values))
            dispatch(push('/'))
        }
    })

)(ProfileForm)
