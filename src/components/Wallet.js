import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'


class Wallet extends Component {
    // TODO: read activeItem from URL or smth
    state = { generated: false }

    handleGenerated = () => {
        this.setState({ generated: true })
        this.props.onGenerateMnemonic()
    }

    render() {
        const { handleSubmit, onGenerateMnemonic } = this.props;
        const { generated } = this.state;

        return (
            <div className="full-page">
                <div className="main">
                    <h1>AVDEX // Passphrase</h1>

                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <Form.Field>
                            <label>Passphrase</label>
                            <Field name="seed" component="input" type="text" placeholder='update fade car…' autoComplete="off" />
                        </Form.Field>

                        {generated ? <p>These 12 words allow you to enter your account. Save them somewhere safe and secret.</p> : null}

                        <Button primary type='submit'>Submit</Button>
                        <Button type='button' onClick={this.handleGenerated.bind(this)}>Generate a new wallet</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

Wallet.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onGenerateMnemonic: PropTypes.func.isRequired
}

const WalletForm = reduxForm({
    form: 'wallet',
    enableReinitialize: true
})(Wallet)


export default WalletForm
