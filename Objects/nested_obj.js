const details = {

    name : "Sayed",
    roll : 1951,
    place : "KALLURU",
    E_mail : "nomail@gmail.com",

    my_cars : {
        car2 : "BMW",
        car3 : "AUDI",
        car4 : "BENZ",
        car5 : "TATA"
    }
}

delete details;

details.my_cars.Car1 = "Lamborgini";

console.log(details);

let x = details.my_cars.car3;
console.log(x);