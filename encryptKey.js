const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

const main = async () => {
  const wallet = new ethers.Wallet(process.env.privateKey);
  const encryptedKey = await wallet.encrypt(
    process.env.privateKeyPass,
    process.env.privateKey
  );
  fs.writeFileSync("./.encryptedKey.json", encryptedKey);
};

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
