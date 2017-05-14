const initialState = {
    data: {} // publicKey -> profile
}

const profiles = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROFILE':
            return Object.assign({}, state, {
                data: {
                    ...state.data,
                    [action.profile._pk]: action.profile
                }
            })

        default:
            return state
    }
}

export default profiles
