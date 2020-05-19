const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "when banana unable goddess million elevator media please opinion olive wrist mosquito",
  "https://rinkeby.infura.io/v3/8b6ad81d743b412fbc9f62e9bf84dc14"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("deploying from ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0] });

  console.log("Contract deployed to ", result.options.address);
};
deploy();
