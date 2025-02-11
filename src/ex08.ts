// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.

interface Address {
  address?: {
    city?: string
  }
}

interface House extends Address{

}

const myHouse: House = {
  address: {
    city: "New York"
  }
};

console.log(myHouse.address?.city ?? "City not available");
// Expected Output: "New York"

const noCityHouse: House = {
};
console.log(noCityHouse.address?.city ?? "City not available");
// Expected Output: "City not available"