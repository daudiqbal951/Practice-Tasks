"use strict";
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza*/
var pizza = ["Chicken Supreme Pizza", "Creamy Peri Peri Pizza", "Bonfire Pizza"];
//loop to print name of each pizza
for (let i = 0; i <= (pizza.length - 1); i++) {
    console.log(`${pizza[i]}`);
}
//Modified loop to print a sentence with pizza name
for (let i = 0; i <= (pizza.length - 1); i++) {
    console.log(`I really want to eat ${pizza[i]}`);
}
console.log(`I really like pizza of cheezious of dominos,\nI can eat them whereever whenever I want to eat.\nI really love Pizza!`);
