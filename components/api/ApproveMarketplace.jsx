import { Button } from "@chakra-ui/react";
import { erc721ABI, useAccount } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { BigNumber } from "ethers";

const ApproveMarketplace = (NFT, tokenID) => {
  const { address, isConnected } = useAccount();
  console.log("NFT", NFT.tokenID);
  console.log("tokenID", tokenID);
  const { config } = usePrepareContractWrite({
    address: NFT.NFT,
    abi: erc721ABI,
    overrides: {
      from: address,
      gasLimit: 10000000,
    },
    functionName: "approve",
    args: ["0x88Ab79411cDc6A17cA1D8233A505FC4d41BC7f80", NFT.tokenID],
    enabled: [NFT],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div>
      <Button colorScheme={"blue"} onClick={() => write?.()}>
        Approve
      </Button>
      {/* {isLoading && (
        <Button loadingText="Loading" colorScheme="teal" variant="outline" />
      )}
      {isSuccess && (
        <Button colorScheme="teal" variant="outline">
          Success
        </Button>
      )} */}
    </div>
  );
};
export default ApproveMarketplace;
