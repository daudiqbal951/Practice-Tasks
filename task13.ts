/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and
make a list that stores several examples. Use your list to print a series of statements about
these items, such as “I would like to own a Honda motorcycle.”*/
var ownArray:string []=["Honda 150F","Suzuki GS150", "Honda Civic Rebirth", "Suzuki Cultus","Toyota Revo"]
ownArray.forEach((elem)=>{
    console.log(`I would like to own a ${elem}`)
}
)