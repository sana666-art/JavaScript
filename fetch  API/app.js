const  URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);

const factPara= document.querySelector( "#factpara");
const btn = document.querySelector( "#btn");
//async await
const getFacts = async () => {
    console.log("Getting DAta......")
    let response = await fetch(URL);
    console.log(response); //JSON FORMAT
    // console.log(response.status);
    let data = await response.json();
    // console.log(data);
    // console.log(data[0].text);
    // factPara.innerText = data[0].text;
    // factPara.innerText = data[1].text;
    factPara.innerText = data[2].text;
};

//promise chain
// function getFacts(){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click", getFacts);























