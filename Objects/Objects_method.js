// these are the object Method Given below........

// normally we are going to use the method "Function which it is store the Properties of the values....."

const person = {

    firstname : "John Randly ",
    lastName : "Doe",
    Age : 45,
    id : 45_34_23_12,
    performance : "good",

    // full_name : function() {

    //     return this.firstname + " " + this.lastName;
    // }

}

person.x = function(){ // x is the Property in the left side.

    return (this.Age + " is " + this.performance).toUpperCase();
}

console.log(person.x());

// <---Using Loop for Objects/Method (Functions)   ---- > 

// using the for loop we acn also declare the words

// ex :-

// const Sample = {

//     company : "Acccenture",
//     package : "LPA24",
//     place : "NOIDA",
//     mobile : 7997128623,
//     test : "PASS"
// }

// let x = "";

// for(let i in Sample){

//     x = x + Sample[i];
// }

// console.log(x); 

const person1 = {

    name : "John",
    age : 30,
    city : "New York"
};

const My_array  = Object.values(person1);

console.log(My_array); 