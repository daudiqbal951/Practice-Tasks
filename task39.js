"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let city1 = cityCountry("Sahiwal", "Paksitan");
let city2 = cityCountry("Helsinki", "Finland");
let city3 = cityCountry("Istanbul", "Turkiye");
console.log(city1);
console.log(city2);
console.log(city3);
