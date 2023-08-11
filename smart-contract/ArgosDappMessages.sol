// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

struct Message {
    address author;
    string text;
    uint timestamp;
    string username;
}

contract ArgosDappMessages {

    uint public nextId = 0;

    uint public constant PAGE_SIZE = 10;

    mapping(uint => Message) public messages;

    mapping(address => string) public users;

    function addMessage(string calldata text) public {
        Message memory newMessage;
        newMessage.text = text;
        newMessage.author = msg.sender;
        newMessage.timestamp = block.timestamp;

        nextId++;
        messages[nextId] = newMessage;
    }

    function changeUsername(string calldata newName) public {
        users[msg.sender] = newName;
    }

    function getLastMessages(uint page) public view returns (Message[] memory) {
        if (page < 1) page = 1;
        uint startIndex = (PAGE_SIZE * (page - 1)) + 1;

        Message[] memory lastMessages = new Message[](PAGE_SIZE);
        for (uint i = 0; i < PAGE_SIZE; i++) {
            lastMessages[i] = messages[startIndex + i];
            lastMessages[i].username = users[lastMessages[i].author];
        }

        return  lastMessages;
    }

}
