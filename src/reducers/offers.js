const initialState = {
    profiles: {}, // publicKey -> [offerId]
    search: [], // list of all search offers found
    data: {} // txid -> offer
}

const offers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OFFER':
            return Object.assign({}, state, {
                profiles: {
                    ...state.profiles,
                    [action.offer._pk]: [
                        ...state.profiles[action.offer._pk] || [],
                        action.offer._tx
                    ]
                },
                data: {
                    ...state.data,
                    [action.offer._tx]: action.offer
                }
            })
        case 'SET_SEARCH_RESULT':
            return Object.assign({}, state, {
                search: Object.keys(action.searchRes),
                data: {
                    ...state.data,
                    ...action.searchRes
                }
            })
        case 'RESET_SEARCH_RESULT':
            return Object.assign({}, state, {
                search: []
            })
        default:
            return state
    }
}

export default offers
