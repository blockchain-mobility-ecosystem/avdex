import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'


const Wallet = ({ handleSubmit, onGenerateMnemonic }) => (
    <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field>
            <label>Passphrase</label>
            <Field name="seed" component="input" type="text" placeholder='update fade car…' autoComplete="off" />
        </Form.Field>

        <Button primary type='submit'>Submit</Button>
        <Button secondary type='button' onClick={onGenerateMnemonic}>Generate a new wallet</Button>
    </Form>
)

Wallet.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onGenerateMnemonic: PropTypes.func.isRequired
}

const WalletForm = reduxForm({
    form: 'wallet',
    enableReinitialize: true
})(Wallet)


export default WalletForm
