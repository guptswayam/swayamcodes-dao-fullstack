//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract SwayamCodesToken is ERC777 {
  address public owner;
  constructor(uint256 initialSupply)
        ERC777("Swayam Codes", "SWAYAMCODE", new address[](0))
    {
        owner = msg.sender;
        _mint(msg.sender, initialSupply, "", "");
    }

  function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
      require(msg.sender == owner, "Only Owner can transfer tokens");
      super._beforeTokenTransfer(operator, from, to, amount);
    }
}