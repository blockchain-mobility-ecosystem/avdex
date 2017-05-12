const identity = (state = {}, action) => {
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
        case 'SET_PROFILE':
            return Object.assign({}, state, {
                profile: action.profile
            })

        default:
            return state
    }
}

export default identity
