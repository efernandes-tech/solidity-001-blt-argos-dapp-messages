# solidity-001-blt-argos-dapp-messages

## smart-contract

### Notes:

- Our ArgosDappMessages.sol smart contract.

### How to Run:

1. open https://remix.ethereum.org
2. create a new ArgosDappMessages.sol file
3. copy and paste the content from repo
4. compile & deploy
5. test

## dapp

### How to Run:

1. on prompt access the "dapp" folder
2. command: cd dapp
3. command: npm install
4. if you have your contract deployed, change his address at services/Web3Service.js and your ABI.json
5. command: npm run dev
6. http://localhost:3000

## TODO:

- Have a mapping and allow the definition of user photo (URL of an image);
- The pagination be dynamic, defined by the contract administrator;
- Function to return only messages from a specific user;
- Deploy on another blockchain (suggestions: Avalanche Fuji, Polygon Mumbai or Ethereum Goerli)
- Use useEffect and localStorage to save and detect that the user is already authenticated on Frontend, without it need to press the button;
