const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    
    // Retrieve the WalletFactory contract
    const walletFactory = await ethers.getContractAt("WalletFactory", "0xA2C67C7Dd9749cb985FCAE3022260193Efe20733");
    
    // Create Wallet contract
    tx = await walletFactory.createAccount(deployer.address, 0);
    await tx.wait();
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
