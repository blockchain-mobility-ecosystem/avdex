import bip39 from 'bip39';

export const generateMnemonicSeed = () => {
    return {
        type: 'GENERATE_MNEMONIC_SEED',
        seed: bip39.generateMnemonic()
    }
}

export const setMnemonicSeed = (seed) => {
    return {
        type: 'SET_MNEMONIC_SEED',
        seed
    }
}
