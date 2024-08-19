import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";


const func: DeployFunction = async function ({ getNamedAccounts, deployments, ethers, ...hre }: HardhatRuntimeEnvironment) {
    const { deployer } = await getNamedAccounts();
    const { deploy, execute } = deployments;

    const mockToken = await deploy('MockToken', {
        from: deployer,
        args: ["Mock A Token", "MAT"],
        log: true,
    });

    const helloPayRedPackageFactory = await deploy('HelloPayRedPackageFactory', {
        from: deployer,
        args: [[
            "0xe5B49820e5A1063F6F4DdF851327b5E8B2301048",    // Bonk
            "0x8A953CfE442c5E8855cc6c61b1293FA648BAE472",    // PolyDoge
            "0x8E677CA17065eD74675BC27bCaBadB7Eef10A292",    // Rain Coin
            "0xAFCdd4f666c84Fed1d8BD825aA762e3714F652c9",    // Vita Inu
            "0x58c1BBb508e96CfEC1787Acf6Afe1C7008A5B064",    // hoge finance
            "0x3d2bD0e15829AA5C362a4144FdF4A1112fa29B5c",    // Bonsai Token
            "0x0e7252706393470FfB0629DA2CAa39Fc9340F2d4",    // DogeGF
            "0x9e20461bc2c4c980f62f1B279D71734207a6A356",    // OmniCat
            "0x04565fE9AA3ae571ada8e1bEBF8282C4e5247b2A",    // WGC
            "0xbA777aE3a3C91fCD83EF85bfe65410592Bdd0f7c",    // BitCone
        ]],
        log: true,
    });


    // const deployerSigner = await ethers.getSigner(deployer);
    // const factory = await ethers.getContractAt("HelloPayRedPackageFactory", "0x1a65BBbc5f29588919823F20f48369C977DD95e0", deployerSigner);

    // console.log("====start approve====");

    // const totalCoachFund = ethers.parseEther("1000000");
    // const mockTokenContract = await ethers.getContractAt("MockToken", "0x8A953CfE442c5E8855cc6c61b1293FA648BAE472", deployerSigner);
    // await mockTokenContract.mint(deployer, totalCoachFund);
    // await mockTokenContract.approve(helloPayRedPackageFactory.address, totalCoachFund);

    // console.log("====create new redPackge====");
    // await factory.sendRedPackage(0, "0x8A953CfE442c5E8855cc6c61b1293FA648BAE472", totalCoachFund, 100, 500326, "Follow HelloPay’s Farcaster Bro!");
    // console.log("====finish create redPackge====");

    // console.log("====open redPackge====");
    // await factory.claimRedPackage(500326, 0);
    // console.log("====finish open redPackge====");
};

func.tags = ["deploy"];

export default func;
