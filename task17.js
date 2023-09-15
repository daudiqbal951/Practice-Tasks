"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests */
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
console.log(`I can only invite two people for dinner`);
while (guestList.length > 2) {
    console.log(`Hi ${guestList[guestList.length - 1]}, I am sorry I cannot invite you to the dinner`);
    guestList.pop();
}
guestList.forEach((elem) => {
    console.log(`Hi ${elem}, you are still invited for dinner at my place on Saturday 8 PM`);
});
while (guestList.length > 0) {
    guestList.splice(guestList.length - 1, 1);
}
console.log(guestList);
