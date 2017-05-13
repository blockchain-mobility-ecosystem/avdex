const initialState = {
    mine: [], // list of all offers (txids) owned by the current user
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
        default:
            return state
    }
}

export default offers
