let boxes = document.querySelectorAll(".box");
let reset_Btn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//atlernate turn
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked.");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const disabledBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const reset_Game = () => {
    turnO = true;
    enabledBtn();
    msgContainer.classList.add("hide");
};

const showWinner = ((winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click", reset_Game);
reset_Btn.addEventListener("click", reset_Game);

// resetBtn.addEventListener("click", reset_Game);

// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         console.log(pattern[0], pattern[1], pattern[2]);
//         console.log(
//             boxes[pattern[0]],
//             boxes[pattern[1]],
//             boxes[pattern[2]],
//             );
//     }
// };







