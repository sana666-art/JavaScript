// logic:
// rotation
//     hour hand:
//         12hour = 360deg 
//         1hour= 360/12 = 30deg
//         h hours = (30xh) deg + (m * 1/2) de
//             60min = 30deg
//             1min = 30/60 = 1/2 deg = 0.5 deg
//             m min = (m * 1/2) deg = m/2
//     minutes hand:
//         60min = 360deg
//         1min = 360/60 = 6 deg = 6 deg
//         m min = (m * 6) deg= 6m

//     second hand:
//         60sec = 360deg
//         1sec = 360/60 = 6 deg = 6 deg
//         s min = (s * 6) deg = 6s


function analogClock(){
    let hr = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let date = new Date();
    //getting hr, min, and sec from date()
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let hRotation = 30*hh + mm/2;    
    let mRotation = 6 * mm;
    let sRotation = 6 * ss; 
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(analogClock, 1000);

let displayDate = document.getElementById("Date");
function digitalClock(){
                
    let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    let dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");


    var today = new Date();
    displayDate.innerHTML = (dayNames[today.getDay()] + " " + 
    today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());


    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;               

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}
var inter = setInterval(digitalClock,400);
