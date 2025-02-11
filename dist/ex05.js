"use strict";
// Exercise 5: Type Casting
// Define an interface for a "User" with a required "id" (number) and optional "email" (string).
// Create an object with unknown type, then cast it to the "User" interface and log the email if it exists.
var _a;
const unknownUser = {
    id: 1,
    email: "test@example.com"
};
const user = unknownUser;
console.log((_a = user.email) !== null && _a !== void 0 ? _a : "Email not available");
// Expected Output: "test@example.com"
