"use strict";
function infoCar(manufacturer, modelName, ...options) {
    let car = { manufacturer, modelName };
    for (let i = 0; i < (options.length - 1); i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }
    return car;
}
let myCarInfo = infoCar("Suzuki", "Cultus", "Color", "Smoke Grey", "Model Year", 2013, "Back Camers", "No");
console.log(myCarInfo);
