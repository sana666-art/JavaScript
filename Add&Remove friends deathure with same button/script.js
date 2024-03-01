var stat = document.querySelector("h5");
var addfriend_btn = document.querySelector("#Add");
var check = 0;

addfriend_btn.addEventListener("click", function(){
    if(check===0){
        stat.innerText = "Friends";
        stat.style.color = "green";
        check = 1;
        addfriend_btn.innerText ="Remove Friend";
        addfriend_btn.style.backgroundColor = "#dadadd";
        addfriend_btn.style.color = "#111";
    }else{
        stat.innerText = "Stranger";
        stat.style.color = "red";
        check = 0;
        addfriend_btn.innerText ="Add Friend";
        addfriend_btn.style.backgroundColor = "rgb(164, 135, 169)";
    }
})
