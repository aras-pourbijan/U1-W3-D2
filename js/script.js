//document.write("Hello World!");
//let name = "Aras";
let name = prompt("What's your name?")

//let family = "Pourbijan";
let family = prompt("and you family?")

// let name = " Marco";  impossibile 
var cityOfResidence = "milan"
var cityOfResidence= prompt("where do you live?")


// var city = "milan";
// console.log(city)

// changeing variation
const cityOfBorn = prompt("where do you burn?");
 

//const cityOfBorn =  "Berlin";   No lets to change

let age =prompt("How old are you?");
let javaAge = age - 2


console.log(`${name} ${family} from ${cityOfBorn} live in ${cityOfResidence} ${age} years old`);



if(age>= 18){
    document.getElementById("present").innerHTML+=(`Nice to meet you ${name} ${family} ! my name is Java  and I'm ${javaAge} years old.${cityOfBorn} is a very nice city !!! , and it's amazing already I'm living in ${cityOfResidence} like you! Would you like to take a drink with me?`)
} else {
    document.write(" Ok! back to study!")
}
//------------------------------------------------------
let day = 1;
let week= day*7
let month
let year

 






