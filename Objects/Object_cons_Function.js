/* 
                Syntax :- 
        function name(x,y,z){
        this. ...... = x;
        this. ...... = y;
        this. ...... = z;
        }
*/

// function name(Name, age , roll, mail , Class ){

//     this.New1 = Name;
//     this.New2 = age ;
//     this.New3 = roll ;
//     this.New4 = mail;
//     this.New5 = Class;
//     this.New6 = " OK";

// }

// // Raheem.Place = "Kolkata";

// const Rahem = new name("Raheem" , 20 , "A2", "nomail@gmail.com" , 10 );
// const Prem = new name ("Prem_Sai" , 19 , "A8" , "prem@gmail.com" , 12);

// delete Rahem.New1;

// Rahem.Place = "Kolkata";

// console.log(Rahem.New1 , "in", Rahem.Place);

// console.log(Rahem.New1, Prem.New2, Rahem.New6);  

// function name1(para1 , para2 , para3 , para4 , para5){

//     this.pro1 = para1;
//     this.pro2 = para2;
//     this.pro3 = para3;
//     this.pro4 = para4;
//     this.pro5 = para5;

// }

// function name(Para1 , Para2 , Para3, Para4){
//     this.Pro1 = Para1;
//     this.Pro2 = Para2;
//     this.Pro3 = Para3;
//     this.Pro4 = Para4;

// }

// let one = new name1("val1" , "val2" , "val3" , "val4" , "val5");
// let two = new name("Val2", "Val2", "Val3", "Val4");

// console.log(one.Pro1 , one.Pro2, one.pro1);
// console.log(two.Pro1 , two.Pro4, two.pro3);

// let name = {

//     NAme : "Nowshad",
//     Place : "KAllur",
//     Roll : 56,
//     maill : "No mail@gmail.com",
// }
// console.log(name.NAme);

let Name = {

    name : "Sayed",
    Age : 18,
    Place : "Kalluru",
    mail : "nomail@mail.com",
    address : "Diguva Street KAlluru",
    full_name : function(){

        return this.name + " " + this.Place;
    }
}
console.log(Name.full_name());
