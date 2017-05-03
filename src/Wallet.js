import bip39 from 'bip39';

import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class Wallet extends Component {
    constructor (props) {
        super(props);
        this.state = {mnemonic: ''};
    }

    generateMnemonic (e) {
        e.preventDefault();
        this.setState({'mnemonic': bip39.generateMnemonic()});
    }

    render () {
        const mnemonic = this.state.mnemonic;

        return (
                <Form>
                    <Form.Field>
                        <label>Passphrase</label>
                        <input placeholder='update fade car…' value={mnemonic} />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                    <Button onClick={this.generateMnemonic.bind(this)}>Generate a new wallet</Button>
                </Form>
        );
    }
}

export default Wallet;
