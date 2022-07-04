//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import {SwayamCodesToken} from "./SwayamCodesToken.sol";

contract DAO is Ownable {
  uint public proposalsCount;
  SwayamCodesToken votingToken;

  constructor(SwayamCodesToken _tokenAddress) {
    votingToken = _tokenAddress;
  }

  struct Proposal {
    uint id;
    bool exists;
    string desc;
    uint deadline;
    uint votesUp;
    uint votesDown;
    address[] canVote;
    uint256 maxVotes;
    mapping (address => bool) voteStatus;
    bool countConducted;
    bool passed;
  }

  mapping (uint => Proposal) public proposals;

  event ProposalCreated(uint id, string description, address proposer, uint maxVotes);

  event NewVote(address voter, uint votesUp, uint votesDown, uint proposal, bool votedFor);

  event ProposalCount(uint id, bool passed);

  function checkProposalEligibility(address proposer) private view returns(bool) {
    uint tokens = votingToken.balanceOf(proposer);

    return tokens > 0 ? true : false;
  }

  function checkVoterEligibility(uint proposalId, address _voter) private view returns(bool) {
    Proposal storage proposal = proposals[proposalId];
    require(proposal.exists, "Proposal doesn't exist");
    for(uint i=0;i<proposal.canVote.length;i++) {
      if(proposal.canVote[i] == _voter)
        return true;
    }

    return false;
  }

  function createProposal(string memory desc, address[] memory canVote) public {
    require(checkProposalEligibility(msg.sender), "You are not eligible to create a proposal");

    proposalsCount++;

    Proposal storage newProposal = proposals[proposalsCount];
    newProposal.id = proposalsCount;
    newProposal.desc = desc;
    newProposal.canVote = canVote;
    newProposal.deadline = block.number + 100;
    newProposal.maxVotes = canVote.length;
    newProposal.exists = true;

    emit ProposalCreated(newProposal.id, desc, msg.sender, canVote.length);
  }
  
  function castVote(uint proposalId, bool _vote) public {
    Proposal storage proposal = proposals[proposalId];
    require(checkVoterEligibility(proposalId, msg.sender), "You are not eligible to cast the vote");
    require(proposal.deadline >= block.number, "The deadline is passed for this proposal");
    require(!proposal.voteStatus[msg.sender], "You have already voted on this proposal");

    proposal.voteStatus[msg.sender] = true;
    if(_vote)
      proposal.votesUp++;
    else 
      proposal.votesDown++;

    emit NewVote(msg.sender, proposal.votesUp, proposal.votesDown, proposal.id, _vote);
  }

  function countVotes(uint proposalId) public onlyOwner {
    Proposal storage proposal = proposals[proposalId];
    require(proposal.exists, "Invalid Proposal Id");
    require(proposal.deadline < block.number, "Deadline is not passed yet");
    require(!proposal.countConducted, "Votes already counted!");

    if(proposal.votesUp > proposal.votesDown) {
      proposal.passed = true;
    } else {
      proposal.passed = false;
    }

    proposal.countConducted = true;

    emit ProposalCount(proposalId, proposal.passed);

  }

}