import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'


const Wallet = ({ onGenerateMnemonicSeed, tempSeed }) => (
    <Form>
        <Form.Field>
            <label>Passphrase</label>
            <input placeholder='update fade car…' value={tempSeed || ''} />
        </Form.Field>

        <Button type='submit'>Submit</Button>
        <Button onClick={e => { e.preventDefault(); onGenerateMnemonicSeed() }}>Generate a new wallet</Button>
    </Form>
)

Wallet.propTypes = {
    onGenerateMnemonicSeed: PropTypes.func.isRequired,
    tempSeed: PropTypes.string
}

export default Wallet;
