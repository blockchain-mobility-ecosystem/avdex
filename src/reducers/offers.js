const initialState = {
    mine: [], // list of all offers (txids) owned by the current user
    search: [], // list of all search offers found
    data: {} // txid -> offer
}

const offers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OFFER':
            return Object.assign({}, state, {
                mine: [
                    ...state.mine,
                    action.offer._tx
                ],
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
        default:
            return state
    }
}

export default offers
