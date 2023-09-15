"use strict";
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers,
countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
var listArray = ["Arabic", "German", "Urdu", "English", "French"];
console.log("List of languages is:");
for (let i = 1; i <= listArray.length; i++) {
    console.log(`${i}-${listArray[i - 1]}`);
}
