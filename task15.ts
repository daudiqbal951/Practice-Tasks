/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to think of someone else to invite*/
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