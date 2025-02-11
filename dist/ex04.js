"use strict";
// Exercise 4: Intersection Types
// Create two interfaces, "Shape" with a "name" property and "Dimensions" with "width" and "height" properties.
// Use an intersection type to combine these two interfaces and create a "Rectangle" object.
const myRectangle = {
    name: "Rectangle",
    width: 10,
    height: 5,
};
console.log(myRectangle);
// Expected Output: { name: "Rectangle", width: 10, height: 5 }
