import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xe1f38E75Fb8704f8a77181FF0047Df042134905";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x4C8bbbaCfc9F856b3C02fa0F95D23189b029c5e2";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
    const myBalanceBeforeWithdraw = await saveERC20.myBalance()

    console.log("User balance before :::", myBalanceBeforeWithdraw);

    const withdrawAmount = ethers.parseUnits("50", 18);

    const withdrawTx = await saveERC20.withdraw(withdrawAmount);

    console.log(withdrawTx)
    
    withdrawTx.wait()

    const myBalanceAfterWithdraw = await saveERC20.myBalance()

    console.log("User balance after :::", myBalanceAfterWithdraw);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
