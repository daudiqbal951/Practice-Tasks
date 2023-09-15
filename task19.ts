/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/

var guestList:string[]=["Nabia","Shanzay","Rida"]
guestList.forEach((elem)=>{
    console.log(`Hi ${elem}, you are invited for dinner at my place on Saturday 8 PM`)
}
)
console.log(`Rida cannot make it to the dinner`)

var guestList=guestList.map((elem)=>{
    if(elem == "Rida"){
        elem ="Namal"
    }
    return elem
}
)
guestList.forEach((elem)=>{
    console.log(`Hi ${elem}, you are invited for dinner at my place on Saturday 8 PM`)
}
)
console.log(`I have found a bigger table for dinner`)
guestList.splice(0,0,"Saud")
guestList.splice(guestList.length/2,0,"Masab")
guestList.push("Daud")
guestList.forEach((elem)=>{
    console.log(`Hi ${elem}, you are invited for dinner at my place on Saturday 8 PM`)
}
)
console.log(`The number of people invited are ${guestList.length}`)