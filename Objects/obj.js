const name = {

    First_Name : "Sayed",
    Last_Name : "Nowshad",
    Roll : 1951,
    Place : "Angallu",
    E_mail : "nomail@gmail.com",
    First_Name : "sayed... "

}

na
let y = name[E_mail];
console.log(y);

let x1 = name.E_mail;
console.log(x1);

alert("Hello Sayed " + name["Roll"]);

const x = name;

// x.Roll = "1951";
console.log(x.Roll);

name.Gender = "MALE";

console.log(name);

console.log(name.First_Name);
// above and below are same OUTPUT.
console.log(name["First_Name"]);

delete name.First_Name;

console.log(name.First_Name);

