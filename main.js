const button = document.querySelector("button");
const greeting = document.querySelector("#greeting");
const container = document.querySelector(".container");

button.addEventListener("click", greet);

function greet(){
    const name = prompt('What is your Name?');
    greeting.textContent = `Hello ${name}, nice to see you!`;

    container.style.background = "darkblue";
    button.style.background = "black";
    button.style.color = "white";
    greeting.style.background = "#ccc";
    greeting.style.width = "180px";
}

