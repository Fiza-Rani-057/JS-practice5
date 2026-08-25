
//   Rest , Spread 
// 1.Array ko copy krna 

let array1 = [1, 2, 3, 4, 5, , 7, 8, 9, 10];
let array2 = [...array1];

console.log(`${array2}`);

//  Output : 1,2,3,4,5,,7,8,9,10 

// 2.  Do array ko merge krna 

let fruit = ["mango", "Apple"];
let fruite = ["Banana", "Cherry"];
const result = [...fruit, ...fruite];

console.log(result);

//  Output :  ['mango', 'Apple', 'Banana', 'Cherry']

//  3. Array me new value add krna 

let Fruite = ["Apple", "Mango"];
let newFruite = [...Fruite, "Cherry"];

console.log(newFruite);

//  Output :  ['Apple', 'Mango', 'Cherry']

// 4. Array ke start mein value add karna

let numbers = [2, 3, 4, 5];
let newNumbers = [1, ...numbers];

console.log(newNumbers);

//  Output :  [1, 2, 3, 4, 5]

// 5. String ko array mein convert karna

let name = "Ali";
let letters = [...name];

console.log(letters);

//  Output : ['A', 'l', 'i']

// 6. Math.max() ke saath

let nums = [10, 20, 30, 40, 8];
let maxValue = [Math.max(...nums)];

console.log(maxValue);

//  Output :[40]

// 7. Object ko copy karna

let user = {
    Name: "Ali",
    age: 20
};

let newUser = { ...user };
console.log(newUser);

//  Output : {Name: 'Ali', age: 20}

// 8. Objects ko merge karna

let obj1 = {
    name: "Ali"
}
let obj2 = {
    age: 20
}
let person = {
    ...obj1,
    ...obj2
};

console.log(person);

// Output: {name: 'Ali', age: 20}

// 9. Object ki property update karna

let student = {
    name: "Ahmed",
    age: 30
}
let updateStd = {
    ...student,
    age: 31
}
console.log(updateStd);

// Output: {name: 'Ahmed', age: 31}

// 10. Function mein array ki values pass karna

function calc(a, b, c) {
    return a + b + c;
}
let values = [10, 20, 30];
console.log(calc(...values));

// Output: 60

//   Arrow Function 
// 1. Simple arrow function

const greet = () => {
    console.log(`Hello World`);
}
greet();

//  Output : Hello World

// 2. Arrow function with one parameter

const number = (num) => {
    return num * num;
}
console.log(number(5));

//  Output : 25

// 3. Short form (implicit return)

const double = numb => numb * 2;
console.log(double(10));

//  Output : 20

// 4. Two parameters

const add = (a, b) => a + b;
console.log(add(10, 20));

//  Output : 30

// 5. Subtraction
let sub = (a, b) => a - b;
console.log(sub(20, 10));

// Output : 10

// 6. Check even number

 const isEven = num => num %2 === 0;
 console.log(isEven(4));
 