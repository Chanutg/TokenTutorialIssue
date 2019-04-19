const MyToken = artifacts.require("./MyToken.sol");

const web3 = require("web3-utils");

module.exports = (deployer, network, [owner]) => {

  const _name = "TestingToken";
  const _symbol = "TEST";
  const _decimals = 18;
  const _initialSupply = 18000000;
  const _rate = 500;

  return deployer
	.then(() => deployer.deploy(MyToken, _name, _symbol, _decimals, _initialSupply))
	.then(() => MyToken.deployed())
};
