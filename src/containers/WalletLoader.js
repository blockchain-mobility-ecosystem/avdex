import { connect } from 'react-redux';
import { generateMnemonicSeed } from '../actions';
import Wallet from '../components/Wallet';

const mapStateToProps = (state) => {
    return {
        tempSeed: state.identity.tempSeed
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGenerateMnemonicSeed: () => dispatch(generateMnemonicSeed())
    };
}

const WalletLoader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wallet);

export default WalletLoader;
