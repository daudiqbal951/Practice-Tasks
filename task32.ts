/*Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username*/
var currentUsers:string[]=["Daud","Shanzay","nabia","Saud","Namal"]
var newUsers:string[]=["masab","shanzay","NABIA","rida","hareem"]

currentUsers=currentUsers.map((elem)=>{
    elem=elem.toLowerCase()
    return elem
}
)

for(let i=0;i<=(newUsers.length-1);i++){
    if(currentUsers.includes(newUsers[i].toLowerCase())){
        console.log(`The username ${newUsers[i]} is already taken, Enter a new username`)
    }
    else {
        console.log(`The username ${newUsers[i]} is available`)
    }
}