import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xe1f38E75Fb8704f8a77181FF0047Df042134905C";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
// 0xe1f38E75Fb8704f8a77181FF0047Df042134905C
// Deployed 0x4C8bbbaCfc9F856b3C02fa0F95D23189b029c5e2