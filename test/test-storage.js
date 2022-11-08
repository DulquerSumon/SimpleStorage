const { assert } = require("chai");
const { deploy, ethers } = require("hardhat");

describe("Storage", async function () {
  let storage;
  beforeEach(async function () {
    const Factory = await ethers.getContractFactory("Storage");
    storage = await Factory.deploy();
  });
  it("should set the value of the information correctly", async function () {
    const info = "this is a secret information";
    await storage.setInformation(info);
    const result = await storage.getInformation();
    assert.equal(info, result);
  });
});
