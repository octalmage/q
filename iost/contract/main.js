const rstorage = require('../libjs/storage.js');
const rBlockChain = require('../libjs/blockchain.js');
const storage = new rstorage();
const blockchain = new rBlockChain();

class main {
    init() {
    }

    guess(guess) {
        const answerHash = 'ByWzfo9kF5aP52zjP4ZveRwwww8crjxKSb9BNChYkEnt';
        blockchain.deposit(tx.publisher, 100, "Puzzle Guess!");

        const guessHash = IOSTCrypto.sha3(guess);
        if (answerHash === guessHash) {
            const contractBalance = blockchain.call("token.iost", "balanceOf", ["iost", blockchain.contractName()]);

            const reward = new Float64(contractBalance[0]).div(10).toFixed(8);

            blockchain.receipt(`{"name": "${tx.publisher}", "guess": "${guess}", "result": "correct", "reward": "${reward}", "balance": "${contractBalance}"}`);

            blockchain.withdraw(tx.publisher, reward, 'You did it!');
            return "CORRECT! Great job!";
        }

        blockchain.receipt(`{"name": "${tx.publisher}", "guess": "${guess}", "result": "incorrect"}`);
        return "INCORRECT! Try again!";
    }

    deposit(amount) {
        const ret = blockchain.requireAuth(blockchain.contractOwner(), 'active');
        if (ret !== true) {
            throw new Error("require auth failed");
        }

        blockchain.deposit(tx.publisher, amount, `Contract seeded with: ${amount}`);

        return amount;
    }
};
module.exports = main;
