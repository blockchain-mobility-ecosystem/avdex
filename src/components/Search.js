import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

import Offers from './Offers'

class Search extends Component {
    componentWillUnmount() {
        this.props.onUnmount()
    }

    render() {
        const { handleSubmit, search, data } = this.props
        return (
            <div>
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <Form.Field>
                        <label>Search</label>
                        <Field name="textQuery"
                               component="input"
                               type="text"
                               placeholder="Search for assets..." />
                    </Form.Field>

                    <Button primary type='submit'>Search</Button>
                </Form>
                <Offers list={search} data={data} />
            </div>
        )
    }
}

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onUnmount: PropTypes.func.isRequired,
}


const SearchForm = reduxForm({
    form: 'search'
})(Search)


export default SearchForm
