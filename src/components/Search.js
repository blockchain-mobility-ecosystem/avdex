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
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Min. Price</label>
                            <Field name="minPrice"
                                   component="input"
                                   type="number"
                                   min="0"
                                   step="1"
                                   placeholder='0' />
                        </Form.Field>
                        <Form.Field>
                            <label>Max. Price</label>
                            <Field name="maxPrice"
                                   component="input"
                                   type="number"
                                   min="0"
                                   step="1"
                                   placeholder='' />
                        </Form.Field>
                    </Form.Group>
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
