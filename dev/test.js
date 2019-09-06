const Blockchain =require('./blockchain');
const bitcoin = new Blockchain();


const bc1={
    "chain": [
    {
    "index": 1,
    "timestamp": 1567769834097,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1567769868744,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1567769885833,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "ac039e10d09a11e9a02031a91285e521",
    "transactionId": "c0aec150d09a11e9a02031a91285e521"
    }
    ],
    "nonce": 54068,
    "hash": "00002e10509323442e5eb090cae284607ebc32eda3e3fb08dc5fbfd15e33b3e7",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1567770060497,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "ac039e10d09a11e9a02031a91285e521",
    "transactionId": "cada5cc0d09a11e9a02031a91285e521"
    },
    {
    "amount": 2001,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "013f6170d09b11e9a02031a91285e521"
    },
    {
    "amount": 201,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "0fab8cc0d09b11e9a02031a91285e521"
    },
    {
    "amount": 3901,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "25c66ca0d09b11e9a02031a91285e521"
    }
    ],
    "nonce": 47979,
    "hash": "0000f6577028dde9e41ffcf74dbcb1028f347b3d20cdbce4145b35d57bef21eb",
    "previousBlockHash": "00002e10509323442e5eb090cae284607ebc32eda3e3fb08dc5fbfd15e33b3e7"
    },
    {
    "index": 5,
    "timestamp": 1567770224693,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "ac039e10d09a11e9a02031a91285e521",
    "transactionId": "32f5d230d09b11e9a02031a91285e521"
    },
    {
    "amount": 4001,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "732abdc0d09b11e9a02031a91285e521"
    },
    {
    "amount": 5001,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "8858f3b0d09b11e9a02031a91285e521"
    },
    {
    "amount": 6001,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "8b28b580d09b11e9a02031a91285e521"
    },
    {
    "amount": 7001,
    "sender": "BBASDFBCDASF123456",
    "recipient": "IIBAACCDDEEFF2213",
    "transactionId": "8ffb7340d09b11e9a02031a91285e521"
    }
    ],
    "nonce": 69224,
    "hash": "00005a975967b6cc9e42e39930c21290d656c8a3aeede2613e4e577afee4e53b",
    "previousBlockHash": "0000f6577028dde9e41ffcf74dbcb1028f347b3d20cdbce4145b35d57bef21eb"
    },
    {
    "index": 6,
    "timestamp": 1567770229162,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "ac039e10d09a11e9a02031a91285e521",
    "transactionId": "94d47290d09b11e9a02031a91285e521"
    }
    ],
    "nonce": 46232,
    "hash": "00007929da6758beb023ee3c04a1b54cf688e653a957f2bfbfbbaf90fe835662",
    "previousBlockHash": "00005a975967b6cc9e42e39930c21290d656c8a3aeede2613e4e577afee4e53b"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "ac039e10d09a11e9a02031a91285e521",
    "transactionId": "977e0ec0d09b11e9a02031a91285e521"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }

    console.log('VAlidd',bitcoin.chainIsValid(bc1.chain));