let button = document.querySelector(".nobutton");
let button1 = document.querySelector(".button");//yesbutton
let button3 = document.querySelector(".back");
let back=document.querySelector("back");
let box1=document.querySelector("box1");
let box=document.querySelector('box');


button.addEventListener("mouseover", () => {
    button.style.position = "absolute";
    button.style.left = `${Math.ceil(Math.random() * 95)}%`;
    button.style.top = `${Math.ceil(Math.random() * 95)}%`;
});

button1.addEventListener("click",()=>{
    alert("lets go on a date horrey");
})
