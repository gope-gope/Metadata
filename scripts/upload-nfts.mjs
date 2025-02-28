import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, 2741);

(async () => {
  const drop = await sdk.getContract(process.env.CONTRACT_ADDR, "nft-drop");

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/1",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/2",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/3",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/4",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/5",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/6",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/7",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/8",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/9",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/10",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/11",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/12",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/13",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/14",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/15",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/16",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/17",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/18",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/19",
      "https://my-json-server.typicode.com/gope-gope/METADATA/nfts/20",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
})();
