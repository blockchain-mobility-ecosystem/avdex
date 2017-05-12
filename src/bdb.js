import * as driver from 'js-bigchaindb-driver'


const API_ENDPOINT = 'http://localhost:9984/api/v1/';

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
    const conn = new driver.Connection(API_ENDPOINT)
    return conn.postTransaction(txSigned)
        .then(() => txSigned)
}

export const getTransaction = (txId) => {
    const conn = new driver.Connection(API_ENDPOINT)
    return conn.getTransaction(txId)
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
