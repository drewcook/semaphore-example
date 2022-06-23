// Hardhat Configuration
// Go to https://hardhat.org/config/ to learn more

require('@nomiclabs/hardhat-waffle')
require('hardhat-dependency-compiler')
// Require our custom deployment task
// To learn how to create your own go to https://hardhat.org/guides/create-task.html
require('./tasks/deploy')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4',
	dependencyCompiler: {
		// This allows Hardhat to compile the external Verifier.sol contract.
		paths: ['@semaphore-protocol/contracts/verifiers/Verifier20.sol'],
	},
}
