// let myFunction = (a,b)=> a * b ;

// let x = myFunction(3,5);
// console.log(x);



// let myFunction = (a, b)=> a*b;

// let x = myFunction(23,4);
// console.log(x);

// let Addition = (a,b)=> a + b;

// console.log(Addition(3,9));

// let Name = (a,b)=> (a*b);

// console.log(Name(2,4)); 

// function name(para1, para2){

//     return para1+para2;
// }
// console.log(name(2,4));

// function name(){

//     return "Hello_World";
// }
// console.log(name());
// hello = ()=>{
//     return "Hello";
// }
// console.log(hello());
// {
    // let fun = ()=> "HelloWorld";
    
    //    console.log(fun());
// }
//  fun = ()=> "Hello";

// console.log(fun());

// fun = ()=> "Hello Sir";
// console.log(fun());


//     let array = [1,2,3,4,5];

// array.forEach(function (numbers){

//     console.log(numbers);
// });

// const arr = ["hello" , "this" , "is" ,"caled" , "callback"];

// let Upper_ca = arr.forEach((val)=>{

  
//     return val.toUpperCase();
   
// })

// console.log(Upper_ca);

// const array = [1,2,3,4];

// array.forEach((array)=>{

//     console.log(array ** 2);
// })



const Org_arr = [12,23,34,45,56];

let second_arr = Org_arr.map((value) => {

    return value *value;
})

console.log(second_arr);

let array = [1 , 2 , 3 , 4 , 5 , 6];


// console.log(rest);


// let new_arry = array.filter((val)=>{

//     return val> 3;

// })

// console.log(new_arry);

// const New_Array = [1,2,3,4];

// const Array = New_Array.reduce((val,index) => {

//     return val + index;
// });

// console.log(Array);

// let arrrrrr = [];

// let new_arrrrrr = arrrrrr.reduce((prev,next) =>{

//    return prev > next ? prev : next;
// })
// console.log(new_arrrrrr);

let n = prompt('Enter The size of an array : ');

let arr = [];

for(let i = 1 ; i < n ; i++){

   arr[i-1] = i;
}

console.log(arr); 