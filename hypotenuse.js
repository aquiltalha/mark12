const sides=document.querySelectorAll(".side-input")
const hypotenuseBtn=document.querySelector("#hypotenuse-btn")
const outputEl=document.querySelector("#output")

function calculateSumOfSquares(a,b){
    const sumOfSquares=a*a+b*b;

    return sumOfSquares;
}

function calculateHypotenuse()
{
    const h=Math.sqrt((calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value))));
    outputEl.innerText="The length of hypotenuse is "+ h;


}
hypotenuseBtn.addEventListener("click",calculateHypotenuse);
