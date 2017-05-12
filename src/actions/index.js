import bip39 from 'bip39'
import * as bdb from '../bdb'

export function generateMnemonic () {
    return {
        type: 'GENERATE_MNEMONIC',
        seed: bip39.generateMnemonic()
    }
}

export function setSeed (seed) {
    return function (dispatch) {
        const keypair = bdb.keypair(bip39.mnemonicToSeed(seed))
        dispatch({
            type: 'SET_KEYPAIR',
            publicKey: keypair.publicKey,
            privateKey: keypair.privateKey
        })
        bdb.getProfile(keypair.publicKey)
            .then(tx => {
                console.log(tx)
                dispatch({
                    type: 'SET_PROFILE',
                    profile: {
                        ...tx.asset.data.profile,
                        _tx: tx.id
                    }
                })
            })
    }
}

export function submitProfile (profile) {
    return function (dispatch, getState) {
        const { publicKey, privateKey } = getState().identity.keypair

        bdb.publish(publicKey, privateKey, { type: 'dex:profile', profile })
            .then(tx => {
                console.log(tx)
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
