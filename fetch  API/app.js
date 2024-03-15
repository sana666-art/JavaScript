// const  URL = "https://cat-fact.herokuapp.com/facts";

// // let promise = fetch(URL);
// // console.log(promise);

// const factPara= document.querySelector( "#factpara");
// const btn = document.querySelector( "#btn");
// //async await
// const getFacts = async () => {
//     console.log("Getting DAta......")
//     let response = await fetch(URL);
//     console.log(response); //JSON FORMAT
//     // console.log(response.status);
//     let data = await response.json();
//     // console.log(data);
//     // console.log(data[0].text);
//     // factPara.innerText = data[0].text;
//     // factPara.innerText = data[1].text;
//     factPara.innerText = data[2].text;
// };

// //promise chain
// // function getFacts(){
// //     fetch(URL)
// //     .then((response) => {
// //         return response.json();
// //     })
// //     .then((data) => {
// //         console.log(data);
// //         factPara.innerText = data[2].text;
// //     });
// // }

// btn.addEventListener("click", getFacts);


// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading modules")
    console.log("Do something else")
    console.log("Load data")

    let data = await getData()
    console.log(data)
    console.log("process data")
    console.log("task 2")

}
main()

 

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })






















