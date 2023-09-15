"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three
more guests to invite to dinner*/
var guestList = ["Nabia", "Shanzay", "Rida"];
guestList.forEach((elem) => {
    console.log(`Hi ${elem}, you are invited for dinner at my place on Saturday 8 PM`);
});
console.log(`Rida cannot make it to the dinner`);
var guestList = guestList.map((elem) => {
    if (elem == "Rida") {
        elem = "Namal";
    }
    return elem;
});
guestList.forEach((elem) => {
    console.log(`Hi ${elem}, you are invited for dinner at my place on Saturday 8 PM`);
});
console.log(`I have found a bigger table for dinner`);
guestList.splice(0, 0, "Saud");
guestList.splice(guestList.length / 2, 0, "Masab");
guestList.push("Daud");
guestList.forEach((elem) => {
    console.log(`Hi ${elem}, you are invited for dinner at my place on Saturday 8 PM`);
});
