import { connect } from 'react-redux'
import WalletForm from '../components/Wallet'


const mapStateToProps = (state) => {
    return {
        initialValues: state.identity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: values => dispatch(setSeed(values.seed)),
        onGenerateMnemonic: () => dispatch(generateMnemonic())
    }
}

const WalletLoader = connect(
    mapStateToProps,
    mapDispatchToProps
)(WalletForm)

export default WalletLoader
