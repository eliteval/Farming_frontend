// SPDX-License-Identifier: MIT

pragma solidity ^ 0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Divinityx is ERC721Tradable {
    uint256 public constant MAX_SUPPLY = 4444;
    // Mint cost = 0.034 eth
    uint256 public constant MINT_COST = 34000000000000000;

    //Active statue
    bool public activeSale = true;
    bool public activePresale = true;
    bool public activePublicsale = true;

    //Presale
    mapping(address => uint256) public availableMints;
    mapping(address => bool) public listedOnWhiteList;

    address payable constant CASHOUT_WALLET1 = payable(0x08397BFc69ad5f3B5BD5D4b0a9a127Fb7e78D45f);
    address payable constant CASHOUT_WALLET2 = payable(0xebc65AAa128dAD74a62329C8Da86b9484E3D0d95);

    constructor(address _proxyRegistryAddress)
    ERC721Tradable("DivinityXXX", "DXXX", _proxyRegistryAddress)
    { }

    function baseTokenURI() public pure override returns(string memory) {
        return "https://divinityx-metadata.herokuapp.com/api/token/";
    }

    function contractURI() public pure returns(string memory) {
        return "https://ipfs.infura.io/ipfs/QmTeB1ukVEBbLy99SnC4AN5orCJAVdqCzp1y4CSgeaDj3x";
    }    
 
    event Minted(address _address, uint256 _tokenId);

    function _mintTokens(address _to, uint256 _numberOfTokens) private{        
        uint256 _totalSupply = totalSupply();
        require(_totalSupply + _numberOfTokens <= MAX_SUPPLY, "Mint exceeds max token supply");

        for (uint i = 0; i < _numberOfTokens; i++) {
            uint256 tokenId = _totalSupply + i;
            // check if a token exists with the above token id
            require(!_exists(tokenId), "That token Id exists");
            // mint the token
            _mint(_to, tokenId);
            //emit event
            emit Minted(_to, tokenId);
        }
    }

    function presaleMint(uint256 _numberOfTokens) external payable{
        require(activeSale, "Sale must be active");
        require(activePresale, "Presale must be active");
        require(_numberOfTokens > 0, "Token count must be at least 0");
        require((MINT_COST * _numberOfTokens) == msg.value, "Incorrect ETH value sent");

        //check if the address is llisted on  white list
        require(listedOnWhiteList[msg.sender], "You are not listed on white list.");
        //check number of tokens is availableMints
        require(availableMints[msg.sender] >= _numberOfTokens, "Invalid number of tokens.");

        _mintTokens(msg.sender, _numberOfTokens);
        availableMints[msg.sender] -= _numberOfTokens;
    }

    function publicMint(uint256 _numberOfTokens) external payable {
        require(activeSale, "Sale must be active");
        require(activePublicsale, "Publicsale must be active");
        require(_numberOfTokens > 0, "Token count must be at least 0");
        require((MINT_COST * _numberOfTokens) == msg.value, "Incorrect ETH value sent");

        _mintTokens(msg.sender, _numberOfTokens);
    }

    //admin functions
    function toggleSale() external onlyOwner {
        activeSale = !activeSale;
    }

    function togglePublicSale() external onlyOwner {
        activePublicsale = !activePublicsale;
    }

    function togglePresale() external onlyOwner {
        activePresale = !activePresale;
    }

    function addTolistedOnWhiteList(address _address) external onlyOwner{
        require(!listedOnWhiteList[_address], "Already listed on white list.");

        listedOnWhiteList[_address] = true;
        availableMints[_address] = 2;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        uint towallet1 = balance * 9 / 10;
        uint towallet2 = balance - towallet1;
        CASHOUT_WALLET1.transfer(towallet1);
        CASHOUT_WALLET2.transfer(towallet2);
    }
}
