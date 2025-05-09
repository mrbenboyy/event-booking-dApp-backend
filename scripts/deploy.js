const hre = require("hardhat");

async function main() {
  const EventBooking = await hre.ethers.getContractFactory("EventBooking");
  const contract = await EventBooking.deploy();
  await contract.waitForDeployment();

  console.log(`Contract deployed to: ${await contract.getAddress()}`);

  // Ajouter 2 événements
  await contract.createEvent("Conférence IA", 10);
  await contract.createEvent("Concert Blockchain", 5);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
