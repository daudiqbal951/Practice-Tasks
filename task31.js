"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty*/
var userNames = [];
if (userNames.length == 0) {
    console.log(`We need to find some users!`);
}
for (let i = 0; i <= (userNames.length - 1); i++) {
    if (userNames[i] == "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
