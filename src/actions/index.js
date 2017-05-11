import bip39 from 'bip39'
import * as driver from '../bdb'

export function generateMnemonic () {
    return {
        type: 'GENERATE_MNEMONIC',
        seed: bip39.generateMnemonic()
    }
}

export function setSeed (seed) {
    return function (dispatch) {
        const keypair = driver.keypair(bip39.mnemonicToSeed(seed))
        dispatch({
            type: 'SET_KEYPAIR',
            publicKey: keypair.publicKey,
            privateKey: keypair.privateKey
        })
        dispatch({
            type: 'LOADING_OFFERS'
        })
    }
}

export function submitProfile (profile) {
    return function (dispatch, getState) {
        const { publicKey, privateKey } = getState().identity.keypair

        driver.publish(publicKey, privateKey, profile)
            .then(res => {
                console.log(res.json())
                dispatch({
                    type: 'SET_PROFILE',
                    profile: profile
                })
            })
    }
}
