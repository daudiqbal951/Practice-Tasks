/*Animals: Think of at least three different animals that have a common characteristic. Store the names
of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your
program to print a statement about each animal, such as A dog would make a great pet. • Add a line at
the end of your program stating what these animals have in common. You could print a sentence such as
Any of these animals would make a great pet!*/
var animals:string[]=["Dog","Cat","Rabbit"]
//loop to print name of each pizza
for(let i=0;i<=(animals.length-1);i++){
    console.log(`${animals[i]}`)
}
//Modified loop to print a sentence with pizza name
for(let i=0;i<=(animals.length-1);i++){
    console.log(`A ${animals[i]} would be a great pet`)
}
console.log(`They are four-legged,\nThey can be trained and are really cute as pets\nAny of these animals would make a great pet!`)