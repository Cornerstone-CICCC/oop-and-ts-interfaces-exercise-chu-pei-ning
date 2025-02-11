"use strict";
// Exercise 3: Optional Parameters & Properties
// Define an interface for a "Car" object with an optional "color" property and a required "model" (string).
// Create a function that takes this object as a parameter and logs the model and color (if available).
const describeCar = (car) => {
    console.log(`Model: ${car.model}`);
    if (car.color) {
        console.log(`Color: ${car.color}`);
    }
};
describeCar({ model: "Tesla" });
// Expected Output:
// Model: Tesla
describeCar({ model: "Ford", color: "Red" });
// Expected Output:
// Model: Ford
// Color: Red
