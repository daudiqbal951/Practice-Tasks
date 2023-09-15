/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a
different number of arguments each time.*/
function sandwichIngredient(ingredient:string[]){
    console.log(`\nThe sandwich includes:`)
    ingredient.forEach((elem,i)=>{
        console.log(`${i+1}- ${elem}`)
    }
    )
}
sandwichIngredient(["chicken","tomatoes","onions","corriander"])
sandwichIngredient(["beef","jalapenos","onions","mustard"])
sandwichIngredient(["chicken","ketchup","cheese","olives"])