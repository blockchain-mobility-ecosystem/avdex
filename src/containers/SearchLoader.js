import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { submitSearch } from '../actions'
import SearchForm from '../components/Search'


export default connect(

    state => ({
        data: state.offers.data,
        search: state.offers.search
    }),

    dispatch => ({
        onSubmit: values => {
            dispatch(submitSearch(values))
        }
    })

)(SearchForm)
