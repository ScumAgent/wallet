const { ethers } = require("hardhat");

async function sendApproveTx() {
  // 1. Set up the RPC provider (e.g., Infura, Alchemy, or a local node)
  const provider = new ethers.JsonRpcProvider("https://arbitrum-sepolia-rpc.publicnode.com");

  // 2. Create a wallet using your private key and connect it to the provider
  const privateKey = "PRIVATE_KRY";
  const wallet = new ethers.Wallet(privateKey, provider);

  // 3. Set up the contract details
  const walletAddress = "0x523AA7331Ce12E21610e3d4F9FC2DD3a48Dc8487";
  // Define the minimal ABI
  const contractAbi = [
    "function buyToken() external"
  ];

  // 4. Create a contract instance connected with the wallet (signer)
  const walletContract = new ethers.Contract(walletAddress, contractAbi, wallet);

  try {
    // 5. Send the buyToken transaction
    console.log("Sending buyToken transaction...");
    const tx = await walletContract.buyToken();
    await tx.wait();
    console.log("Transaction hash:", tx.hash);

  } catch (error) {
    console.error("Error sending buyToken transaction:", error);
  }
}

// Execute the function
sendApproveTx();
