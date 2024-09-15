let heroes = ["IronMan","Ant", "Superman","Hulk","SpiderMan"];

console.log(heroes);

let hobbies = [];

hobbies.push(prompt("Which Company You Choose : "));
hobbies.push("IBM");
hobbies.push("ACCENTURE");
hobbies.push("NVIDA");

console.log(hobbies);

let gallary = ["img1.jpg", "img2.jpg" , "img3.jpg"];

gallary.forEach(image=>{

    console.log(`<img src="${image}" alt = "Image Gallary">`);
});
 
let lists = ["  Part  A"," PartH" , "  PartB", "  PartC"];

for(let list of lists){

    console.log(list.trim());
}

let marks = [85,97,44,37,76,60];

let size = marks.length;

let sum  = 0 ;

for(let val of marks){

    sum += val;
}
 
let avg = sum / size;
console.log(`The Average Marks are : ${avg}`);

let items1 = [250,645,300,900,50];

for(let i = 0 ; i < items1.length ; i++){

    let offer = items1[i] / 10 ;
    items1[i] = items1[i] - offer;

}
console.log(`The new offers are available ${items} `);

let items = [];

items.push(9,"34");
items.push('100');

console.log(`${items}`);