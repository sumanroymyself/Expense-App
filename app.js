//total amount init
let totalAmount= 0;

//getting the ref for input amount element
const input_amount= document.querySelector("#input-amnt");
//getting the ref for total element
const total_out= document.querySelector("#total-out");
//getting the ref for the button element
const btn= document.querySelector("#add-button");
//giving the click ability to the button element
btn.addEventListener("click", clickEventHandler);

//defining the click event
function clickEventHandler(){
    //console.log(input_amnt.value);
    const strAmnt= input_amount.value;
    const amount= parseInt(strAmnt);
    totalAmount+= amount;
    total_out.innerHTML= totalAmount;
}