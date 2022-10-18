/*Create 3 simple functions where call, bind and apply are used.
 The intention of this exercise isto understand how they work and their differences. */

//  .call method:

let userdetails = {
    name: "zaid kazi",
    Age: 23,
    Designation:"Software Engineer",   
}

let printdetails = function(state,country){
    console.log(this.name + " " + state +" "+ country)
}

printdetails.call(userdetails,"Gujarat","India")

let userdetails1 = {
    name: "Afnan kazi",
    Age: 13,
    Designation:"Student",
}


// .apply method
printdetails.apply(userdetails1 , ["Maharastra","India"])


// bind method
var sum ={
    a:10,
    b:20,
}
var sumo = function() {
    return(this.a + this.b )
}
let fn = sumo.bind(sum)
console.log(fn())


