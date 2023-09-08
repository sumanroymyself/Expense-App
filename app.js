//getting the ref for input amount element
const input_amount= document.querySelector
//getting the ref for total element
const total_out= document.querySelector("#total-out");
//getting the ref for the button element
const btn= document.querySelector("#add-button");
//giving the click ability to the button element
btn.addEventListener("click", clickEventHandler);


function clickEventHandler(){
    console.log("button working");
}