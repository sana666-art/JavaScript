// console.log("one");
// console.log("two");
// console.log("three");
// let hello = () => { 
//     console.log("hello!");
// }
// setTimeout(hello, 40000); 

// setTimeout(() => { console.log("hello!");}, 4000); //timeout in milisec: 1sec = 1000milisec

// console.log("four");
// console.log("five");

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack(a,b);
// }

// calculator(1, 2, sum);

// calculator(1, 2, (a, b) => {
//     console.log(a * b);
// });

// function getData(dataId){
//     // console.log("data", dataId);
//     //take to 2sec t fatch data
//     setTimeout(()=> {
//         console.log("data", dataId);
//     }, 2000 );
// }

// getData(1); //2s
// getData(2); //2s
// getData(3); //2s

//getData with delay --> use callback

// function getData(dataId, getNextData) {
//     setTimeout(()=> {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000 );
// }

// //callback hell --> nasted callbacks
// getData(1, () =>{
//     console.log("getting data2.......");
//     getData(2, () =>{
//         console.log("getting data3.......");
//         getData(3, () =>{
//             console.log("getting data4.......");
//             getData(4);
//         });
//     });
// });

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promises");
//     reject("success");
//     reject("some error");
// });

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("Success");
            // reject("error");
            if(getNextData){
                getNextData();
            }
        }, 5000 );
    });
}
//Promise chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });
//another way
// getData(1)
// .then((res) => {
//     console.log("getting data2.......");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3.......");
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });

// let promise = getData(123);

// const getPromise = (){
//     return new Promise((resolve, reject) => {
//         console.log("I am a promises");
//         reject("success");
//         // reject("some error");
//     });
// }
// let promise = getPromise();

// promise.then((res) => {
//     console.log("promuse fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });

// function asyncFunc1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 3000);
//     });
// }
// function asyncFunc2 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 3000);
//     });
// }

// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("promuse fulfilled", res);
//     console.log("fetching data2");
//     let p2 = asyncFunc2();
//     p1.then((res) => {
//         console.log("promuse fulfilled", res);
//     });
// });

//another way
// asyncFunc1().then((res) => {
//     console.log("promuse fulfilled", res);
//     console.log("fetching data2");
//     asyncFunc2().then((res) => {});
// });

// console.log("fetching data2");
// let p2 = asyncFunc2();
// p1.then((res) => {
//     console.log("promuse fulfilled", res);
// });


// async function hello() { 
//     console.log("hello!");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(" weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api(); //1st
//     await api(); //2nd
// }

// async-await

// async function getAllData(){
//     console.log("getting data1.......");
//     await getData(1);
//     console.log("getting data2.......");
//     await getData(2);
//     console.log("getting data3.......");
//     await getData(3);
//     console.log("getting data4.......");
//     await getData(4);
//     console.log("getting data5.......");
//     await getData(5);
// }

//IIFE
(async function (){
    console.log("getting data1.......");
    await getData(1);
    console.log("getting data2.......");
    await getData(2);
    console.log("getting data3.......");
    await getData(3);
    console.log("getting data4.......");
    await getData(4);
    console.log("getting data5.......");
    await getData(5);
}());

