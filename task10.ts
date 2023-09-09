/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does*/

//first code
var personName:string = "hAssAn"
console.log(`Lowercase: ${personName.toLowerCase()}`)
console.log(`Uppercase: ${personName.toUpperCase()}`)
//create a function to rewrite name in title case form
function titleCaseeName(name:string){
    name=name.toLowerCase()
    name=name.charAt(0).toUpperCase()+name.slice(1)
    return name
}
console.log("Titlecase:", titleCaseeName(personName));

//second code
var famousPerson:string = "Albert Einstein"
var message: string = "Imagination is more important than knowledge."
// print the message using defined variables for name and quote
console.log(`${famousPerson} once said,"${message}"`)