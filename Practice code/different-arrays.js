/*
Differences between forEach, map, filter, and find:

1. forEach(): Loops through an array and executes a function on each element but does not return a new array.
   Example: 
   array.forEach(item => console.log(item));

2. map(): Loops through an array, transforms each element, and returns a new array with modified values.
   Example:
   const newArray = array.map(item => item * 2);

3. filter(): Loops through an array and returns a new array containing only elements that satisfy a given condition.
   Example:
   const filteredArray = array.filter(item => item > 10);

4. find(): Loops through an array and returns the first element that satisfies a given condition.
   Example:
   const foundItem = array.find(item => item === 10);

Key Differences:
- forEach() does not return a new array, it only executes a function on each element.
- map() returns a new array with modified values.
- filter() returns a new array with only the elements that pass a condition.
- find() returns only the first matching element, not an array.

*/


// const numbers=[1,2,3,4,5,6];
// const newArray=numbers.map(number=>number+1);
// console.log(newArray)
// const squareArray=numbers.map(element =>element * element )
// console.log(squareArray)

const products=[
    {id:1,name:"i-phone",color:'black',price:1200,brand:'apple'},
    {id:2,name:"note 13",color:'gold',price:200,brand:'Redmi'},
    {id:3,name:"S-23 ultra",color:'white',price:1200,brand:'Samsung'},
    {id:4,name:"Rog ally",color:'gold',price:1200,brand:'Asus'},
    {id:5,name:"i-phone",color:'gold',price:1000,brand:'apple'},
]
// products.forEach(product => {
//     if(product.color === "gold"){
//         console.log(product)
//     }
// });

// const newProducts =products.filter(p=>p.price>1000)
// console.log(newProducts)
// const newProducts =products.find(p=>p.price>1000)
// console.log(newProducts)