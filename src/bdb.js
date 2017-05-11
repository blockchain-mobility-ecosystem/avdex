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
    const conn = new driver.Connection(API_ENDPOINT, { 'Content-Type': 'application/json' })
    return conn.postTransaction(txSigned)
}
