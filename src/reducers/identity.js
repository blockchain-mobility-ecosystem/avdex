const identity = (state = {}, action) => {
    switch (action.type) {
        case 'GENERATE_MNEMONIC_SEED':
            return Object.assign({}, state, {
                tempSeed: action.seed
            });
        case 'SET_MNEMONIC_SEED':
            return Object.assign({}, state, {
                seed: action.seed
            });

        default:
            return state;
    }
}

export default identity;
