"use strict";
// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.
var _a, _b, _c, _d;
const myHouse = {
    address: {
        city: "New York"
    }
};
console.log((_b = (_a = myHouse.address) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : "City not available");
// Expected Output: "New York"
const noCityHouse = {};
console.log((_d = (_c = noCityHouse.address) === null || _c === void 0 ? void 0 : _c.city) !== null && _d !== void 0 ? _d : "City not available");
// Expected Output: "City not available"
