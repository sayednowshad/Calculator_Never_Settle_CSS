// methods also know as Functions ok ?

//       .......It Stores Property Values......

const person = {

    name : "Sayed",
    roll : 1951,
    place : "KALLURU",
    door_no : 5_55_2,
    mail : "nomail@gmail.com",
        
     full_name : function(){
    
        return this.name + " " + this.mail;
    }
}


console.log(person.full_name())

console.log(person);
// console.log(person.full_name());

//  <---------- Using L00PS ---------->

const people = {

    age : 20,
    city : "Andhra Pradesh",
    door : 1951
}

    
// let temp = "  ";

// for(let i in people){

//     temp = temp + people[i] + " ";
// }
// console.log(temp);

console.log(people.length);

let letter = Object.values(people);

console.log(letter);