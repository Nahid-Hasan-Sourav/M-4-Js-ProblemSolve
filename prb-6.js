// 6) You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

let fruits = ['Apple', 'Banana', 'Orange'];

let Bananaindex = fruits.indexOf("Banana");
console.log("index of ‘Banana’ = ",Bananaindex )

// let  replace=fruits.splice(Bananaindex,1,'Mango')
// console.log(fruits);

//**************/
//Another wY FOR replace ‘Banana’ with ‘Mango’.
if(Bananaindex!=-1){
    fruits[Bananaindex]='Mango'
}

console.log("Replace ‘Banana’ with ‘Mango’ : "+fruits)

let indexOrange=fruits.indexOf('Orange');
if(indexOrange!=-1){
    fruits[indexOrange]='Watermelon';

}
console.log("Remove ‘Orange’ and add ‘Watermelon’ " +fruits)

//another way for remove element

let RemoveOrange=fruits.splice(2,1,'Watermelon')
console.log("Remove ‘Orange’ and add ‘Watermelon’ by splice() " +fruits);