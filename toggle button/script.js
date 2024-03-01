// let modebtn = document.querySelector("#mode");

// let body = document.querySelector("body");
// let curMode = "light";

// modebtn.addEventListener("click", () => {
//     if(curMode === "light"){
//         curMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         curMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(curMode);
// });



// modebtn.addEventListener("click", () => {
//     if(curMode === "light"){
//         curMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         curMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(curMode);
// });


let modebtn = document.querySelector("span");
let body = document.querySelector("body");
let curMode = "light";

modebtn.addEventListener("click", () => {
    if(curMode === "light"){
        curMode = "dark";
        body.style.backgroundColor = "black";
    }
    else{
        curMode = "light";
        body.style.backgroundColor = "white";
    }
});




















