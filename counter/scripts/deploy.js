//maginteract sa ethereum sa blockchain
const {ethers} = require("hardhat");
// async function, because we are going to use await, waits before procceed
async function main() {
    // Signers, siya nagbabayad
    // private key: sign transaction
    const [deployer] = await ethers.getSigners();

    const ContractFactory = await ethers.getContractFactory("Counter");

    //deploy contract
    const contract = await ContractFactory.deploy();

    // to easily find the contact
    console.log("Contract deployed to:", contract.target);
    console.log("Deployer address:", deployer.address);
}

// standard border
// error catching
main().catch((error) => {
    console.error(error);
    process.exit(1);
});