const { ethers } = require("hardhat");

async function main() {
    // Retrieve the EntryPoint contract
    const EntryPoint = await ethers.getContractFactory("EntryPoint");
    console.log("Deploying EntryPoint contract...");

    // Deploy the contract
    const entryPoint = await EntryPoint.deploy();

    // Wait until the contract is fully deployed
    await entryPoint.waitForDeployment();
    console.log("EntryPoint deployed to:", entryPoint.target);
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
