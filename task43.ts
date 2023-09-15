/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a
copy of the array of magicians’ names. Because the original array will be unchanged, return the new
array and store it in a separate array. Call show_magicians() with each array to show that you have
one array of the original names and one array with the Great added to each magician’s name.*/
var magicians:string[]=["Ali","Ahmed","Akbar","Kashif","Murshad"]
function makeGreat(people:string[]){
   let greatMagicians:string[]=[]
   for(let i=0; i<=(people.length-1);i++){
    var greatpeople="The Great "+people[i]
    greatMagicians.push(greatpeople)
}
return greatMagicians
}
function showMagicians(people:string[]){
    for(let i=0; i<=(people.length-1);i++){
        console.log(people[i])
    }
}
let greatMagician:string[]=makeGreat(magicians)
showMagicians(magicians)
showMagicians(greatMagician)