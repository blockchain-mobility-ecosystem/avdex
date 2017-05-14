import bip39 from 'bip39'
import * as bdb from '../bdb'

export function generateMnemonic () {
    return {
        type: 'GENERATE_MNEMONIC',
        seed: bip39.generateMnemonic()
    }
}

function mapTransactionToAction (dispatch, txid) {
    return bdb.getTransaction(txid)
        .then(tx => {
            switch (tx.asset.data.type) {
                case 'dex:profile':
                    dispatch({
                        type: 'ADD_PROFILE',
                        profile: {
                            ...tx.asset.data.profile,
                            _pk: tx.inputs[0].owners_before[0],
                            _tx: tx.id
                        }
                    })
                    break
                case 'dex:offer':
                    dispatch({
                        type: 'ADD_OFFER',
                        offer: {
                            ...tx.asset.data.offer,
                            _pk: tx.inputs[0].owners_before[0],
                            _tx: tx.id
                        }
                    })
                    break
                default:
                    console.log(`Dunno what to do with tx {tx.id}`, tx)
            }
        })
}

export function setSeed (seed) {
    localStorage.setItem('seed', seed)

    return function (dispatch) {
        const keypair = bdb.keypair(bip39.mnemonicToSeed(seed))
        dispatch({
            type: 'SET_KEYPAIR',
            publicKey: keypair.publicKey,
            privateKey: keypair.privateKey
        })

        bdb.getUnspents(keypair.publicKey)
            .then(txs => txs.map(mapTransactionToAction.bind(null, dispatch)))
    }
}

export function fetchProfile (publicKey) {
}

export function submitProfile (profile) {
    return function (dispatch, getState) {
        const { publicKey, privateKey } = getState().identity.keypair

        bdb.publish(publicKey, privateKey, { type: 'dex:profile', profile })
            .then(tx => {
                dispatch({
                    type: 'SET_PROFILE',
                    profile: {
                        ...profile,
                        _tx: tx.id
                    }
                })
            })
    }
}

export function submitOffer (offer) {
    return function (dispatch, getState) {
        const { publicKey, privateKey } = getState().identity.keypair

        bdb.publish(publicKey, privateKey, { type: 'dex:offer', offer})
            .then(tx => {
                dispatch({
                    type: 'ADD_OFFER',
                    offer: {
                        ...offer,
                        _tx: tx.id
                    }
                })
            })
    }
}

export function logout () {
    localStorage.clear()
    window.location.href = '/'
}

export function submitSearch ({ textQuery }) {
    return function (dispatch, getState) {
        bdb.textSearch(textQuery)
            .then(searchRes => {
                searchRes = searchRes.reduce((init, curr) => {
                    init[curr.id] = curr.data
                    return init
                }, {})
                console.log(searchRes)
                dispatch({
                    type: 'SET_SEARCH_RESULT',
                    searchRes
                })
            })
    }
}
