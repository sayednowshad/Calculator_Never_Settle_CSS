// welcome to objects....
// To describe the Objects methods.

const person1 = {

    First_name : "John",
    Last_name : "Kin",
    age : 27,
    eyecolor : "Blue",
    Place : "canada",
    native : "pandis"
};

console.log( "These are the objects Values given below",person1);

const person = {}

person.name = "Nowshd";
person.age = 19;
person.height = 6.1;
person_color = "White";
person.religion = "ISLAM";

console.log(person.religion);

const person = {

    first_name : "John",
    last_name : "Doe",
    id : 556644,
    fullname : function(){
        return this.first_name + " " + this.id;
    }
};

console.log(person.fullname()); // 'John 556644'

const name = {

    Name : "john",
    LastName : "Ok",
    Roll : 34,
    id : 45678,
    full_name : function(){
        return this.Name + " " + this.id;
    }
};

console.log(name.LastName); // 'Ok'


const person = {

    firstname : "Sayed",
    Last_name : "Nowshad",
    age : 19,
};

const x1 = (person["firstname"]+ " " + person["Last_name"]);

console.log(x1); // 'Sayed Nowshad'

// this is performing the Values of the 
const Details = {

    name : "Sayed Nowshad",
    age : 19,
    class : "CSD",
    mail : "Sayed@gmail.com"+ "hello",
    roll : "A2",
    pass : true + false,

} 


Details.Rating = "5Star"; //This is i hav been added in the objects .

console.log(Details);// gives total Objects Values .

let x2 = Details.name + " age is " + Details["age"] ;

console.log(x2); // 'Sayed Nowshad age is 19 '.

delete Details["pass"]; //  has been deleted this "Details.mail"

console.log(Details);

let nested1 = {

    name: "Nowshad",
    age: 20,
    mail : "Nowshad@gmail.com",
    name : "Noushad",

    skill: {

        java: "Ok",
        python : "n/a",
        js : "learning",
        DBMS : "learning",
    
    sports:{
            
        carrom : "yep....",
        basket : "Done",
        Shotput : "dull",
 
        }
    }
}


let x3 = nested1["skill"]["sports"]["carrom"]
console.log(x3);// this is the Nested Part. 