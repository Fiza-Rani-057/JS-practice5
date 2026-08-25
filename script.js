
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

 let numbers = [2 , 3 , 4, 5];
 let newNumbers = [1, ...numbers];
 
 console.log(newNumbers);

 //  Output :  [1, 2, 3, 4, 5]

 // 5. String ko array mein convert karna

 let name = "Ali";
 let letters = [...name];

 console.log(letters);

 //  Output : ['A', 'l', 'i']

 // 6. Math.max() ke saath

 let nums = [10 , 20 , 30 , 40 , 8];
 let maxValue = [Math.max(...nums)];

 console.log(maxValue);

 //  Output :[40]

 // 7. Object ko copy karna

  let user = {
    Name : "Ali",
    age : 20
  };

  let newUser = {...user};
  console.log(newUser);

   //  Output : {Name: 'Ali', age: 20}

   // 8. Objects ko merge karna

   let obj1 = {
    name: "Ali"
   }
   let obj2 = {
    age : 20
   }
 let person = {
    ...obj1,
    ...obj2
 };

  console.log(person);

  // Output: {name: 'Ali', age: 20}