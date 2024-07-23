let color = "rgb(0,0,0)"
let R = 0;
let G = 0;
let B = 0;

const container = document.getElementById("container")
container.style.backgroundColor =color;
container.addEventListener("click", colorRandomize);

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

red.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault;
        compareValues();
    }
})
green.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault;
        compareValues();
    }
})
blue.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault;
        compareValues();
    }
})



const check = document.getElementById("check");
check.addEventListener("click", compareValues);

const answer = document.getElementById("answer");
answer.addEventListener("click",showAnswer);


function colorRandomize() {
    const Rrandom = Math.floor(Math.random() * 256);
    const Grandom= Math.floor(Math.random() * 256);
    const Brandom= Math.floor(Math.random() * 256);

    R = Rrandom;
    G = Grandom;
    B = Brandom;
    color = `rgb(${Rrandom}, ${Grandom}, ${Brandom})`;
    container.style.backgroundColor = color;

    red.value ="";
    green.value="";
    blue.value="";
}

function compareValues(){
    if(Math.abs(red.value - R) + Math.abs(green.value - G) + Math.abs(blue.value - B) < 10){
        alert("1! pretty much spot on... damn robot");
    }
    else if(Math.abs(red.value - R) + Math.abs(green.value - G) + Math.abs(blue.value - B) < 20){
        alert("2! pretty damn close");
    }
    else if(Math.abs(red.value - R) + Math.abs(green.value - G) + Math.abs(blue.value - B) < 40){
        alert("3. getting there");
    }
    else if(Math.abs(red.value - R) + Math.abs(green.value - G) + Math.abs(blue.value - B) < 60){
        alert("4. pretty warm");
    }
    else if(Math.abs(red.value - R) + Math.abs(green.value - G) + Math.abs(blue.value - B) < 120){
        alert("5. on the right track");
    }
    else {
        alert("6. ehhhh try again")
    }
}

function showAnswer() {
    alert(` r : ${R} \ng : ${G} \nb : ${B}`);
}
