import * as cc from '../cc'


const identity = (state = {}, action) => {
    switch (action.type) {
        case 'GENERATE_MNEMONIC':
            return Object.assign({}, state, {
                seed: action.seed
            })
        case 'SET_SEED':
            const keypair = cc.keypair(action.seed)

            return Object.assign({}, state, {
                seed: null,
                keys: {
                    public: keypair.publicKey,
                    private: keypair.privateKey
                }
            })

        default:
            return state
    }
}

export default identity
