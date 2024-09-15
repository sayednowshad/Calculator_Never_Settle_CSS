// Object Destruction.......

// const person ={

//     firstName : "Harry",
//     lastName : "Doe",
//     age : 20

// };

// let {firstName,lastName} = person;

// console.log({firstName,lastName});

// // Examples :-

// let person1 = {
//     firstName1 : "Harry1",
//     LastName : "Doe",
//     Age : 34,
//     Place : "Kalluru", 
// };

// let {Age : age} = person1;

// console.log(age);

// let person2 = {

//     E_mail : "Nomail@gmail.com",
//     Roll : "A8",
//     Address : "Kalluru"
// };

// const {E_mail : mail} = person2;

// console.log(mail);

// Using Strings  (" ")  ;

// let name = {

//     Anime : "Shinchan",
//     Age : 45,
//     Place : "Ohio",
//     standard : "Positive"
// };

// let {Anime , Age , Place , country = "ohio's"} = name;

// console.log(name , country);

// const {Anime : hobbies, Place : home} = name;

// console.log(hobbies+" in " + home); 


//  <------ Array Destructing ------>

// const fruits = ["Banana", "Apple" , "Guava" , "Mango"];

// let [fruits1 , fruits2 , fruits3] = fruits;

// console.log(fruits1);

// // <----- Skipping Values ------>

// const names = ["Ali R.A" , "Bilal" , "Umar R.A" , "MD (PBUH)"];

// let [name1 , ,, name2] = names;
// console.log(name1 + " , " + name2);

// const Numbers = [12,23,43,45,6,56,7,67,];

// let [a1,a2,a3,...rest] = Numbers;

// console.log(a1);
// console.log(a2);
// console.log(rest); 

// const fruits = new Map([
//     ["apples" , 500],
//     ["Banana" , 400],
//     ["Mango" , 300]
// ]);

// let text = " ";

// for(const [key,value] of fruits){

//     text += key + " is "+ value;
// }
// console.log(text);

// const Fruits = new Map([

//     ["fruit1" , 100],
//     ["fruit2" , 200],
//     ["fruit3", 300]
// ]);

// let text = " ";

// for(const [key, value] of Fruits){

//     text += key + " is " + value + " , ";
// };

// console.log(text);

// Swapping The Numbers......

let First_Name = "John";
let Last_Name = "Doe";

let x = [First_Name, Last_Name] = [Last_Name , First_Name];

console.log(First_Name);

let f1 = "Hello"
let f2 = "world";

let y = [f1,f2] = [f2,f1];

console.log(y);