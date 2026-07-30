// DIGITAL CLOCK

function updateClock(){

    const now = new Date();

    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
        `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock,1000);

updateClock();


// STOPWATCH

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function display(){

document.getElementById("stopwatch").innerHTML =
String(hours).padStart(2,'0') + ":" +
String(minutes).padStart(2,'0') + ":" +
String(seconds).padStart(2,'0');

}

function run(){

seconds++;

if(seconds==60){

seconds=0;

minutes++;

}

if(minutes==60){

minutes=0;

hours++;

}

display();

}

document.getElementById("start").onclick=function(){

if(timer!==null) return;

timer=setInterval(run,1000);

}

document.getElementById("stop").onclick=function(){

clearInterval(timer);

timer=null;

}

document.getElementById("reset").onclick=function(){

clearInterval(timer);

timer=null;

seconds=0;

minutes=0;

hours=0;

display();

}