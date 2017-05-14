const initialState = {
    seed: null,
    keypair: {
        publicKey: null,
        privateKey: null
    }
}

const identity = (state = initialState, action) => {
    switch (action.type) {
        case 'GENERATE_MNEMONIC':
            return Object.assign({}, state, {
                seed: action.seed
            })
        case 'SET_KEYPAIR':
            return Object.assign({}, state, {
                seed: null,
                keypair: {
                    publicKey: action.publicKey,
                    privateKey: action.privateKey
                }
            })
        default:
            return state
    }
}

export default identity
