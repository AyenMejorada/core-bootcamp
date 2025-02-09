// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0; // base version 0.8.0

contract Counter {
    // declare counter is sign integer
    // public: naaccess
    // private: naaccess within the contract, 'di nauulit
    int256 private counter = 0;
    // view: with only yung data
    // returns:
    function getCounter() public view returns (int256) {
        return counter;
    }
    // no view returns since it doesn't give data
    function increment() public {
        counter ++;
    }

    function decrement() public {
        counter --;
    }
}