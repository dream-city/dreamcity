const DreamCity = artifacts.require('./DreamCity.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner =  "0xC6209690b79DDB25d12EE7eD659B705eB6607879";

    deployer.deploy(DreamCity, owner);
};
