// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.28;

import {Wallet} from "./Wallet.sol";
import {IEntryPoint} from "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract WalletFactory {
    Wallet public immutable accountImplementation;

    IEntryPoint private constant _entryPoint =
        IEntryPoint(0xFd448cDd0dCd865d6e6Cf7eB0A0aEf37400f2E75);

    constructor() {
        accountImplementation = new Wallet(_entryPoint);
    }

    function createAccount(
        address owner,
        uint256 salt
    ) public returns (Wallet ret) {
        address addr = getAddress(owner, salt);
        uint256 codeSize = addr.code.length;
        if (codeSize > 0) {
            return Wallet(payable(addr));
        }
        ret = Wallet(
            payable(
                new ERC1967Proxy{salt: bytes32(salt)}(
                    address(accountImplementation),
                    abi.encodeCall(Wallet.initialize, (owner))
                )
            )
        );
    }

    function getAddress(
        address owner,
        uint256 salt
    ) public view returns (address) {
        return
            Create2.computeAddress(
                bytes32(salt),
                keccak256(
                    abi.encodePacked(
                        type(ERC1967Proxy).creationCode,
                        abi.encode(
                            address(accountImplementation),
                            abi.encodeCall(Wallet.initialize, (owner))
                        )
                    )
                )
            );
    }
}
