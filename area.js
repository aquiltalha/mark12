const baseInput=document.querySelector("#base");
const hieghtInput=document.querySelector("#hieght");
const areaBtn=document.querySelector("#area-btn");
const output=document.querySelector("#output");

function calculateArea(){
    const area=(baseInput.value*hieghtInput.value)/2;
    output.innerText="area of triangle is "+ area+"m²";
}


areaBtn.addEventListener("click",calculateArea);







