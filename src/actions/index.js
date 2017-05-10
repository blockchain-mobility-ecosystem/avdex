import bip39 from 'bip39'

export function generateMnemonic () {
    return {
        type: 'GENERATE_MNEMONIC',
        seed: bip39.generateMnemonic()
    }
}

export function setSeed (seed) {
    return function (dispatch) {
        dispatch({
            type: 'SET_SEED',
            seed: bip39.mnemonicToSeed(seed)
        })
        dispatch({
            type: 'LOADING_OFFERS',
            seed: bip39.mnemonicToSeed(seed)
        })
    }
}
