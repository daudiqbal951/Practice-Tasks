"use strict";
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3*/
var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= (arrayNum.length - 1); i++) {
    if (arrayNum[i] == 1) {
        console.log(`${arrayNum[i]}st`);
    }
    else if (arrayNum[i] == 2) {
        console.log(`${arrayNum[i]}nd`);
    }
    else if (arrayNum[i] == 3) {
        console.log(`${arrayNum[i]}rd`);
    }
    else {
        console.log(`${arrayNum[i]}th`);
    }
}
