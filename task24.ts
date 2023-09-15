/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want
to try more comparisons, write more tests. Have at least one True and one False result for each of
the following:*/

//Tests for equality and inequality with strings
 let car1:string="Toyota"
 let car2:string ="Honda"
//Equality Test
 console.log(car1==car2)
 //Inequaity Test
 console.log(car1!=car2)

 //Tests using the lower case function

 let string: string = "How Are You"
let lowerString: string = string.toLowerCase()

console.log(lowerString === "how are you")

//Numerical tests involving equality and inequality, greater than and less than, greater than or
//equal to, and less than or equal to
let num1: number = 50
let num2: number = 100

console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)

//Tests using "and" and "or" operators
let case1: boolean = true
let case2: boolean = false
console.log(case1 && case2)
console.log(case1 || case2)

//Test whether an item is in a array
let mobiles:string[]=["Iphone","samsung","Nokia"]
let requiredMobile1:string = "Iphone"
console.log(mobiles.includes(requiredMobile1))

//Test whether an item is not in a array
let requiredMobile2:string = "Oppo"
console.log(mobiles.includes(requiredMobile2))