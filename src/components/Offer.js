import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'


const Offer = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field>
            <label>Name</label>
            <Field name="name" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Date</label>
            <Field name="date" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Purpose</label>
            <Field name="purpose" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Description</label>
            <Field name="description" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Lighting conditions</label>
            <Field name="lighting" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Size (GB)</label>
            <Field name="size" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Hash Type</label>
            <Field name="hash_type" component="input" type="text" placeholder='' />
        </Form.Field>

        <Form.Field>
            <label>Hash</label>
            <Field name="hash" component="input" type="text" placeholder='' />
        </Form.Field>

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
