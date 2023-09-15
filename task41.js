"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
var magicians = ["Ali", "Ahmed", "Akbar", "Kashif", "Murshad"];
function showMagician(people) {
    for (let i = 0; i <= (people.length - 1); i++) {
        console.log(people[i]);
    }
}
showMagician(magicians);
