
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

const isEven = num => num % 2 === 0;
console.log(isEven(4));

//  Output : true 

// 7. Greeting with a name

const welcome = name => `Welcome ${name}`
console.log(welcome("Fiza"));

//  Output : Welcome Fiza

// 8. Multiply three numbers

const multiply = (a, b, c) => a * b * c;
console.log(multiply(3, 2, 4));

//  Output : 24

// 9. Arrow function with if condition

const checkAge = age => {
    if (age >= 18) {
        return "Adult"
    }
    else {
        return "Minor";
    }
}
console.log(checkAge(16));

//  Output : Minor 

// 10. Arrow function with array map()

const num = [1, 2, 3, 4, 5];
const doubled = num.map(numb => numb * 2);
console.log(doubled);

//  Output: [2, 4, 6, 8, 10]

//   For in for of 
// 1. Array ke elements print karna

let std = ["amna", "hania", "Luna", "Lena"];

for (let students of std) {
    console.log(students);
};

//   Output: amna hania Luna  Lena

// 2. Numbers print karna

let numbs = [10, 20, 30, 40];

for (let nums of numbs) {
    console.log(nums);
}

//   Output: 10 , 2- 30 , 40
// 3. Array ka total nikalna

let Num = [10, 20, 10];
let total = 0;
for (let num of Num) {
    total += num;
}
console.log(total);

//  Output : 40 

// 4. String ke characters print karna

let Name = "Ali";
for (let name of Name) {
    console.log(name);
}

//  Output : A , l , i 

// 5. Even numbers print karna
let value = [1, 2, , 3, 4, 5, 6];
for (let values of value) {
    if (value % 2 === 0) {
        console.log(values);
    }
}

// 6. Array ke names print karna
let studentss = ["Ahmed", "Ali", "Azhar", "Arham"];

for (let students of studentss) {
    console.log(`Student:`, students);
}

// 7. Array mein values ka square

let numbers1 = [2, 3, 4];
for (let num of numbers1) {
    console.log(num * num);
}


// 8. String ko uppercase mein print karna
let colors = ["red", "blue", "green"];
for (let color of colors) {
    console.log(color.toUpperCase());
}
// 9. Array mein 18 se greater ages

let ages = [10, 25, 16, 20];

for (let age of ages) {
    if (age >= 18) {
        console.log(age);
    }
}

// 10. Array of objects ke saath

let users = [
    { name: "sana", age: 30 },
    { name: "ayesha", age: 10 },
    { name: "sania", age: 40 }
];

for (let user of users) {
    console.log(user.name, user.age);
}

//  Set Map 

//1

const student1 = new Map();
student1.set(101, 'Ali');
student1.set(102, 'Sara');
student1.set(103, 'Alina');

console.log(student1.get(101));
console.log(student1.get(102));
console.log(student1.get(103));

//2

const map = new Map();

map.set( 'name' , 'Alia');
map.set('age' , 20);

console.log(map.get("name"));
console.log(map.get("age"));

//3

const students2 = new Map();
students2.set(101 , "Aliana");
students2.set(102, "Sana");

console.log(students2.has(101));
console.log(students2.has(102));

//4

const students4 = new Map();

students4.set(101, "Sara");
students4.set(102 , 20)

students4.delete(101);
console.log(students4.has(101));

//5

const students5 = new Map();

students5.set(101 , 'mahnoor')
students5.set(102 , 'Sana');
students5.set(103, 'Arreba');
students5.set(104, 'Alina');
students5.set(105 , 'Ahmed');

 console.log(students5.size);