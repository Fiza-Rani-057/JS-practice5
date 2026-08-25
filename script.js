
//   Rest , Spread 
 // 1.Array ko copy krna 

 let array1 = [1 , 2 , 3,4 , 5, , 7, 8 , 9, 10];
 let array2 = [...array1];
 
 console.log(`${array2}`);

 //  Output : 1,2,3,4,5,,7,8,9,10 

// 2.  Do array ko merge krna 

 let fruit = ["mango" , "Apple"];
 let fruite = ["Banana" , "Cherry"];
 const result = [...fruit , ...fruite];

 console.log(result);

//  Output :  ['mango', 'Apple', 'Banana', 'Cherry']

//  3. Array me new value add krna 

 let Fruite = ["Apple" , "Mango"];
 let newFruite = [...Fruite , "Cherry"];

 console.log(newFruite);

//  Output :  ['Apple', 'Mango', 'Cherry']








 


