import * as driver from 'js-bigchaindb-driver'


const API_ENDPOINT = 'http://localhost:9984/api/v1/'
const conn = new driver.Connection(API_ENDPOINT)
const CACHE = {}

export const keypair = (seed) => new driver.Ed25519Keypair(seed.slice(0, 32))

export const publish = (publicKey, privateKey, payload) => {
    // Create a transation
    const tx = driver.Transaction.makeCreateTransaction(
        payload,
        null,
        [ driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(publicKey))
        ],
        publicKey
    );

    // sign/fulfill the transaction
    const txSigned = driver.Transaction.signTransaction(tx, privateKey)

    // send it off to BigchainDB
    return conn.postTransaction(txSigned)
        .then(() => txSigned)
}

export const getUnspents = (publicKey, callback) => {
    return conn.listOutputs({ public_key: publicKey, unspent: 'true'})
        .then(unspents => unspents.map(elem => elem.split('/')[2]))
}

export const getTransaction = (txId) => {
    return new Promise((resolve, reject) => {
        let tx = localStorage.getItem(txId)
        if (tx) {
            resolve(JSON.parse(tx))
        } else {
            conn.getTransaction(txId)
                .then(tx => {
                    localStorage.setItem(txId, JSON.stringify(tx))
                    resolve(tx)
                })
                .catch(reason => reject(reason))
        }
    })
}

export const getProfile = (publicKey) => {
    const conn = new driver.Connection(API_ENDPOINT)
    return conn.listOutputs({ public_key: publicKey, unspent: 'true'})
        .then(unspents => unspents.map(elem => elem.split('/')[2]))
        .then(txs => Promise.all(txs.map(tx => getTransaction(tx))))
        .then(txs => txs.filter(elem => { try {
            return elem.asset.data.profile && elem.operation === 'CREATE'
        } catch (err) { return false }}))
        .then(txs => txs[0])
}
