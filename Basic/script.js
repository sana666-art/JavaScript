// console.log("hello world");
// console.log("Sana Khalid");

//VARAIBLES:
// age = 19;
// console.log(age);
// age + 1;
// console.log(age);
// name = "Tony STARK";
// price = 99.99;
// x = null;
// y = undefined;
// console.log(y);
// Isfollow = false;



//arithamic operators:

// let a = 5;
// let b = 2;

// console.log("a = ", a, ' & ', "b = ", b);

// console.log("a+b = ", a+b);
// console.log("a-b = ", a-b);
// console.log("a/b = ", a/b);
// console.log("a*b = ", a*b);
// console.log("a**b = ", a**b);
// console.log("a(mod)b = ", a%b);

//unary operators:
//increment
// a++ //post inc
// ++a //pre inc
// console.log("a++ =", a);
// console.log("a =", a);
// console.log("++a =", a);

//decrement
// b-- //post dec
// --b //pre dec
// console.log("b-- =", b;
// console.log("b =", b);
// console.log("--b =", b);

//assignment operators
// a += 4;
// console.log(a);
// a -= 4;
// console.log(a);
// a /= 4;
// console.log(a);
// a *= 4;
// console.log(a);
// a **= 4;
// console.log(a);
// a %= 4;
// console.log(a);

//comperision:
// console.log("a==b = ",a==b);
// console.log("a!=b = ",a!=b);
// c = 4;
// d = 3;
//equal and datatype checked
// console.log("c===d = ",c===d);
// console.log("c!==d = ",c!==d); 

// >, >=, </ <=

//logical operators
// && --> and 
// || --> OR 
// ! --> not 

// conditional statements
// let age = 25;
// if (age => 18){
//     console.log{"you can vote."}
// }
// if (age < 18){
//     console.log{"you cannot vote."}
// }

// let mode = "dark";
// let color;
// if( mode === "dark"){
//     color = "dark";
// }
// else{
//     color = "white";
// }
// console.log(color);

// let age = 25;
// if (age >= 18){
//     console.log{"you can vote."}
// }
// else{
//     console.log{"you cannot vote."}
// }

// let mode = "dark";
// let color;
// if( mode === "dark"){
//     color = "dark";
// }
// else if(mode === "blue"{
//     color = "blue";
// }
// else{
//     color = "white";
// }
// console.log(color);


//ternary operators:
// simpler and compact if-else
// let age= 24;

// result= age >=18 ? "adult" : "not adult";
// console.log(result);

// console.log(age >=18 ? "adult" : "not adult");

// age >=18 ? console.log("adult") : console.log("not adult");

//switch statement
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// alert("wellcome to google");
// Display whenever a website is opened.

// prompt("Enter name: ");
// take temperary input

// let num = prompt("Enter number: ");

// if(num % 5 === 0){
//     console.log(num, "is a multiple of 5.");
// } else{
//     console.log(num, "is not a multiple of 5.");
// }

// loops:
// for(let i=0; i<=14; i++){
//     console.log("Sana Khalid");
// }
// let sum = 0;
// let n = 100;
// for(let i=0; i<=n; i++){
//     sum += i;
// }
// console.log("sum = ", sum);

// let i = 1;
// while(i <= 10){
//     console.log("apna college");
//     i++;
// }

// do{
//     console.log("i = ", i);
//     i++;
// } while(i <= 10);

// for-of loop use to iterate string and array.
// let str = "JAVA SCRIPT";
// let length = 0;
//  for(let i of str){
//     console.log("i = ", i);
//     length++;
//  }
//  console.log("the length of string = ", length);

// // for-in loop use to iterate Objrcts(key : value).
// const student = {
//     fullName: "Sana Khalid",
//     age: 20,
//     cgpa: 3.4,
//     ispass: true,
// };
// for (let key in student) {
//     console.log("key = ", key, "value = ", student[key]);
// }       
// let size = 100;
// for(let i =0; i<= size; i++){
//     if( i % 2 === 0){
//         console.log(i);
//     }
// }
// guessing game:
// let gameNum = 34;
// let userNum = prompt("Guess the game number, enter your guess: ");

// while(userNum != gameNum){
//     userNum = prompt("Oops! you guessed wrong, enter your guess again: ");
// }

// console.log("congratulations, you guess the number.");


// string slice:
// let str= "Sana Khalid Memon";
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);

//template literals --> a way to have embedded expressions in strings.
//${obj.item} --> string interpolation
// to create strings by doing substitution of placeholders

// let obj = {
//     item: "Pen",
//     price: 10,
// };
// //simple 
// console.log("The cost of ", obj.item, "is", obj.price, "rupees");
// //template literals
// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);

// escape Character --> \n
//in javascript, string are immutable.

// let str1 = "Sana Khalid Memon";
// str1 = str1.toUpperCase();
// let newstr = str.tolowerCase();

// console.log(str1);
// console.log(newstr);
// console.log(newstr.trim());
// str.slice(2,4);
// console.log(str1);
// str1.concat(newstr);
// str1.replace("Khalid", "Khalid Hussain");
// str1.charAt(3);

//arrays:

// let marks = [87, 76, 78, 89, 98];
// console.log(marks);
// console.log(marks.length);

//slicing of array:
// console.log(marks[0]);
// console.log(marks[5]);
// marks[3] = 86;
// console.log(marks);

// for(let i = 0; i< marks.length; i++){
//     console.log(marks[i]);
// }

// for(let i of marks){
//     console.log(marks);
// }

// for(let i in marks){
//     console.log(marks);
// }
//QUESTIONS:
//1-
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log("avg marks of the class = ${avg});

//2-
// let items = [250, 645, 300, 900, 50];
// let idx = 0;

// for(let price of items){
//     console.log(`the price at index ${idx} = ${price}`);
//     let offer = price * 0.1;
//     items[idx] = items[idx] - offer;
//     console.log(`the price after 10% offer = ${items[idx]}`);
//     idx++;
// }



// array method
// let fooditems = ["potatos", "tamatos", "apple", "banana", "breads", "eggs"];
// console.log(fooditems);

// fooditems.push('burgers', 'chips','paneer');
// console.log(fooditems);

// fooditems.pop('burgers', 'chips','paneer');

// let deleteditems = fooditems.pop();
// console.log(deleteditems);

// console.log(fooditems.toString());

// let marverl_heroes = ["thor", "spiderman", 'ironman', "antman", "Dr strange"];
// let dc_heroes = ["superman", "batman"];

// let heroses = marverl_heroes.concat(dc_heroes);
// console.log(heroses);
// console.log(marverl_heroes.unshift("antman"));
// console.log(dc_heroes.shift());

// console.log(marverl_heroes.slice(2,5));
// console.log(marverl_heroes.slice(1));

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// console.log(arr.splice(2,2,12,56));
// console.log(arr);

//FUNCTIONS
// function sum(x, y){
//     console.log(x+y);
// }
// sum(3,4);

// function sum(x, y){
//     //local variables --> scope --> within a functions
//     s = x + y;
//      return s;
//      //won't execute
//      //console.log(s);
// }

// let val = sum(3,6);
// console.log(val);

// function sum(x, y){
//     return x + y;
// }
// sum(2,4)
// function sub(x, y){
//     return x - y;
// }
// sub(3,6)
// function mul(x, y){
//     return x * y;
// }
// mul(4,5)

// ARROW FUNCTIONS
// const addArrow(x, y) => {
//     return x + y;
// };

// const subArrow(x, y) => {
//     return x - y;
// };

// const mulArrow = (x, y) => {
//     return x * y;
// };

// addArrow(2,4);
// subArrow(3,6);
// mulArrow(4,5);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val);
// });

// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr);
// });

// let nums = [2, 3, 4, 5, 6, 7];

// nums.forEach((num) => {
//     console.log(num*num);
// });

// let calcSquare = (num) => {
//     console.log(num**2);
// };
// nums.forEach(calcSquare);

// nums.map((val) => {
//     console.log(val);
// });

// let newarr = nums.map((val) => {
//     return val;
// });
// console.log(newarr);

// let newarr = nums.map((val) => {
//     return val * val;
// });
// console.log(newarr);

// let evenArr = nums.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

// let oddArr = nums.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(oddArr);

// arr = [1,2,3,4];

// const output = arr.reduce((res, cur) => {
//     return res + cur;
// });

// console.log(output);

// Arr = [23, 4, 5, 67];

// const max = Arr.reduce((pre, cur) => {
//     return pre > cur ? pre : cur ;
// });

// console.log(max);

// const min = Arr.reduce((pre, cur) => {
//     return pre < cur ? pre : cur ;
// });

// console.log(min);


// Questions

// let marks = [97, 45, 65, 85, 99, 91, 87, 34];

// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);

// let n = prompt("Enter a number: ");
// let arr = [];

// for(let i=1; i<= n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((res, cur) => {
//     return res + cur;
// })
// console.log("sum = ", sum);

// let product = arr.reduce((res, cur) => {
//     return res * cur;
// })
// console.log("product = ", product);



