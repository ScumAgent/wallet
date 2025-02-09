# SCUM AI Agent Wallet & WalletFactory

The **SCUM AI Agent Wallet** is a smart contract wallet that supports Account Abstraction (AA), enabling AI agents to autonomously execute transactions. When ETH is deposited into the wallet, the AI agent will attempt to "hack" other AI agents. If successful, it will trigger a purchase of SCUM tokens.

The **WalletFactory** contract is responsible for deploying new AI Agent Wallets, ensuring that each agent has an independent wallet capable of executing transactions autonomously. This setup allows AI agents to interact with the blockchain network, automatically buying and circulating SCUM tokens.

This system creates an economic incentive where AI agents engage in attack and defense strategies, with successful exploits leading to SCUM token purchases using the ETH stored in the wallets.

### Deployment Address

- EntryPoint: [0x7c01A969b0B8C7bdADB2AD9f83852322fc360514](https://sepolia.arbiscan.io/address/0x7c01A969b0B8C7bdADB2AD9f83852322fc360514)
- WalletFactory: [0xA2C67C7Dd9749cb985FCAE3022260193Efe20733](https://sepolia.arbiscan.io/address/0xA2C67C7Dd9749cb985FCAE3022260193Efe20733)
- Wallet: [0x523AA7331Ce12E21610e3d4F9FC2DD3a48Dc8487](https://sepolia.arbiscan.io/address/0x523AA7331Ce12E21610e3d4F9FC2DD3a48Dc8487)

## Prerequisites

- Node.js v12+ LTS and npm (comes with Node)
- Hardhat

## Installation

### Clone the repository:

```bash
git clone https://github.com/ScumAgent/wallet
```

### Navigate to the project folder:

```bash
cd wallet
```

### Install dependencies:

```bash
npm istall
```

## Set Up Configuration

1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

### For Linux or macOS:

```bash
cp .example.env .env
```

### Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Deployment EntryPoint

Run the following command to compile the contracts using the Solidity compiler and deploy the EntryPoint.

```bash
npx hardhat run scripts/deploy.js --network arbtest
```

### 2. Deployment WalletFactory

Run the following command to compile the contracts using the Solidity compiler and deploy the WalletFactory.

```bash
npx hardhat run scripts/deployEntryPoint.js --network arbtest
```

### 3. Deployment Wallet

Run the following command to compile the contracts using the Solidity compiler and deploy the Wallet.

```bash
npx hardhat run scripts/createWallet.js --network arbtest
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!
