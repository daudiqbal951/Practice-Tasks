"use strict";
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
writing code that will print a greeting to each user after they log in to a website. Loop through
the array, and print a greeting to each user*/
var userNames = ["admin", "Daud", "Ali", "Shanzay", "Rida", "Saud", "Hassan"];
for (let i = 0; i <= (userNames.length - 1); i++) {
    if (userNames[i] == "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
