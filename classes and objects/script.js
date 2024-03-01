// const student = {
//     fullName : "Sana Khalid",
//     marks: 96.8,
//     printMarks: function() {
//         console.log("marks = ", this.marks);
//     },
// };

// const employee = {
//     calcTax1(){
//         console.log("Tax rate is 10%.");
//     },
// };

// const karan = {
//     salary: 50000,
//     // If object & prototype have same method/func, object’s method will be used.
//     const employee = {
//         calcTax1(){
//             console.log("Tax rate is 20%.");
//         },
// };
// const karan1 = {
//     salary: 50000,
// };
// const karan2 = {
//     salary: 50000,
// };
// const karan3 = {
//     salary: 60000,
// };
// const karan4 = {
//     salary: 70000,
// };
// const karan5 = {
//     salary: 80000,
// };

// karan.__proto__ = employee;
// karan1.__proto__ = employee;
// karan2.__proto__ = employee;
// karan3.__proto__ = employee;
// karan4.__proto__ = employee;
// karan5.__proto__ = employee;

// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("Creating new object.");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
//     // setBrand(brand) {
//     //     this.brandName = brand;
//     // }
// }

// // let fortuner = new ToyotaCar();
// // fortuner.setBrand("fortuner");
// // let lexus = new ToyotaCar();
// // lexus.setBrand("lexus");

// let fortuner = new ToyotaCar("fortuner", 10);//consturctor
// let lexus = new ToyotaCar("lexus", 12);


// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child;

// class person{
//     constructor(){
//         this.species = "homo sapiens"; 
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends person {
//     work(){
//         console.log("Solve Problem, Build something");
//     }
// }

// class Doctor extends person {
//     work(){
//         console.log("treat patient");
//     }
// }

// let sana = new Engineer();
// let pirah = new Doctor();

// class person{
//     constructor(){
//         console.log("enter parent constractor");
//         this.species = "homo sapiens"; 
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends person {
//     constructor(){
//         console.log("enter child constractor");
//         super(); //to invoke parent class contructor.
//         this.branch = this.branch;
//         console.log("exits child constractor");
//     }
//     work(){
//         console.log("Solve Problem, Build something");
//     }
// }

// let engObj = new Engineer("chem eng");

// class person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name; 
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends person {
//     constructor(name){
//         super(name); //to invoke parent class contructor.
//     }
//     work(){
//         super.eat();
//         console.log("Solve Problem, Build something");
//     }
// }

// let engObj = new Engineer("sana");

// let a = 5;
// let b = 10;

// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b = ", a+b);
// console.log("a-b = ", a-b);
// console.log("a*b= ", a*b); 

// try {
//     console.log("a/b = ", a/b);
//     console.log("a**b = ", a**c);
// } 
// catch(err) {
//     console.log(err);
// }

// console.log("a%b = ", a%b);






























