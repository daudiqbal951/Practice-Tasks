/*Cars: Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an
optional feature. Print the Object that’s returned to make sure all the information
was stored correctly.*/
type Car={
    manufacturer:string,
    modelName:string,
    [key:string]:any
}
function infoCar(manufacturer:string,modelName:string,...options:any[]):Car{
    let car:Car={manufacturer,modelName}
    for(let i=0;i<(options.length-1);i+=2){
        let key:string = options[i]
        let value:any = options[i+1]
        car[key]=value
    }
    return car
}
let myCarInfo=infoCar("Suzuki","Cultus","Color","Smoke Grey","Model Year",2013,"Back Camers","No")
console.log(myCarInfo)