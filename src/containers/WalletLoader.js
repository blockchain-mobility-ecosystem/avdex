import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { generateMnemonic, setSeed } from '../actions'
import WalletForm from '../components/Wallet'


export default connect(

    state => ({
        initialValues: { seed: state.identity.seed }
    }),

    dispatch => ({
        onSubmit: values => {
            dispatch(setSeed(values.seed))
            dispatch(push('/'))
        },

        onGenerateMnemonic: () => dispatch(generateMnemonic())
    })

)(WalletForm)
