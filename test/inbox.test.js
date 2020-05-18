const assert = require("assert");
const ganache = require("ganache-cli");
//Contructor Web3
const Web3 = require("web3");
//Instance of web3
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stop";
  }

  drive() {
    return "vroom";
  }
}

describe("Car", () => {
  it("Can park", () => {
    const car = new Car();
    assert.equal(car.park(), "stop");
  });
});
