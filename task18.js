"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.*/
let locationArray = ["Turkey", "Italy", "Finland", "Maldives", "Switzerland"];
console.log("Original Array: ", locationArray);
let sortedLocationArray = locationArray.slice().sort();
console.log("Sorted Array: ", sortedLocationArray);
console.log("Original Array: ", locationArray);
let reverseSortedLocationArray = locationArray.slice().sort((a, b) => b.localeCompare(a));
console.log("Reverse Sorted Array: ", reverseSortedLocationArray);
console.log("Original Array: ", locationArray);
locationArray.reverse();
console.log("Original Array Reverse: ", locationArray);
locationArray.reverse();
console.log("Reverse back to Original Array: ", locationArray);
locationArray.sort();
console.log("Alphabetical sorted Array: ", locationArray);
locationArray.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical sorted Array: ", locationArray);
