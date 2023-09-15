/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
var magicians:string[]=["Ali","Ahmed","Akbar","Kashif","Murshad"]
function makeGreats(people:string[]){
   let greatMagicians:string[]=[]
   for(let i=0; i<=(people.length-1);i++){
    var greatpeople="The Great "+people[i]
    greatMagicians.push(greatpeople)
}
return greatMagicians
}
function showMagicianss(people:string[]){
    for(let i=0; i<=(people.length-1);i++){
        console.log(people[i])
    }
}
let greatMagicians:string[]=makeGreat(magicians)
showMagicianss(greatMagicians)