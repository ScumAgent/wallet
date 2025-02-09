const { ethers } = require("hardhat");

async function main() {
    // Retrieve the WalletFactory contract
    const WalletFactory = await ethers.getContractFactory("WalletFactory");
    console.log("Deploying WalletFactory contract...");

    // Deploy the contract
    const walletFactory = await WalletFactory.deploy();

    // Wait until the contract is fully deployed
    await walletFactory.waitForDeployment();
    console.log("WalletFactory deployed to:", walletFactory.target);
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
