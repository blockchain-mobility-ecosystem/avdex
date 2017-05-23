import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, TextArea } from 'semantic-ui-react'


const Offer = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field>
            <label>Name</label>
            <Field name="name" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Purpose</label>
            <Field name="purpose" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Description</label>
            <Field name="description" as={TextArea} component="textarea" type="text" placeholder='' />
        </Form.Field>

        <Form.Group widths='equal'>
            <Form.Field>
                <label>Date</label>
                <Field name="date" component="input" type="text" placeholder='' />
            </Form.Field>

            <Form.Field>
                <label>Size (GB)</label>
                <Field name="size" component="input" type="text" placeholder='' />
            </Form.Field>

            <Form.Field>
                <label>Hash</label>
                <Field name="hash" component="input" type="text" placeholder='' />
            </Form.Field>

            <Form.Field>
                <label>Price</label>
                <Field name="price"
                    component="input"
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder='' />
            </Form.Field>
        </Form.Group>

        <Button primary type='submit'>Sign and submit</Button>
    </Form>
)

Offer.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const OfferForm = reduxForm({
    form: 'offer'
})(Offer)


export default OfferForm
