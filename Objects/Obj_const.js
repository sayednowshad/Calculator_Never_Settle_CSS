// function name(para1 , para2, para3, para4){

    this.pro1 = para1;
    this.pro2 = para2;
    this.pro3 = para3;
    this.pro4 = para4;


let Names = new name("john" , 34 , "Dark" , "blue");

console.log(Names.para1);

function name(name , age , roll , mail){

    this.Name = name;
    this.Roll = roll;
    this.age = age;
    this.mail = mail;
}

const Names1 = new name("sayed" , 15 , "A2" , "nomail@gmail.com");

const Names2 = new name("Prem" , 19 , "A8" , "prem@gmail.com");

const Names3 = new name("Nishith" , 23 , "D1" , "Anime@gmail.com");

let Values1 = Object.values(Names1);
let Values2 = Object.values(Names2);
let Values3 = Object.values(Names3);

console.log(Values1);
console.log(Values2);
console.log(Values3);

console.log(Names1);

function name(age, name , roll , Class , Year){
    this.Age = age ;
    this.Name = name;
    this.Roll = roll;
    this.Class = Class;
    this.Year = Year;


}

const Details = new name(18 , "Sayed", "A2" , "Csd" , 2024 );

console.log(Details.Name);






