import bip39 from 'bip39'

export const generateMnemonic = () => {
    return {
        type: 'GENERATE_MNEMONIC',
        seed: bip39.generateMnemonic()
    }
}

export const setSeed = (seed) => {
    return {
        type: 'SET_SEED',
        seed: bip39.mnemonicToSeed(seed)
    }
}
