import {
    Ed25519Keypair,
    // makeEd25519Condition,
    // makeOutput,
    // makeCreateTransaction,
    // makeTransferTransaction,
    // signTransaction,
} from 'js-bigchaindb-driver';

/*
const ash = new Ed25519Keypair();

console.log(ash.publicKey); // something like "DjPMHDD9JtgypDKY38mPz9f6owjAMAKhLuN1JfRAat8C"
console.log(ash.privateKey); // something like "7Gf5YRch2hYTyeLxqNLgTY63D9K5QH2UQ7LYFeBGuKvo"

// Let's get an output and condition that lets Ash be the recipient of the new asset we're creating
const ashCondition = new makeEd25519Condition(ash.publicKey);
const ashOutput = new makeOutput(ashCondition);

console.log(ashOutput);
const pokeAsset = {
    'name': 'Pikachu',
    'trait': 'Will never, ever, EVAARRR leave your back'
};

const noMetadata = null; // Let's ignore that meta-stuff for now

// Now let's go give Ash his beloved Pikachu
const createPokeTx = makeCreateTransaction(pokeAsset, noMetadata, [ashOutput], ash.publicKey);

console.log(createPokeTx);
const signedCreateTx = signTransaction(createPokeTx, ash.privateKey);

console.log(signedCreateTx);
*/

export const keypair = (seed) => new Ed25519Keypair(seed.slice(0, 32));
