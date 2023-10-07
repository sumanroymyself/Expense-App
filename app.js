//total amount init
let totalAmount= 0;

//getting the ref for the button element
const btn= document.querySelector("#add-button");
//getting the ref for input desc or text
const desc= document.querySelector("#input-item");
//getting the ref for input amount element
const input_amount= document.querySelector("#input-amnt");
//getting the ref item output
const item_out= document.querySelector("#item-desc");
//getting the ref for total element output
const total_out= document.querySelector("#total-out");
//giving the click ability to the button element
btn.addEventListener("click", clickEventHandler);

//defining the click event
function clickEventHandler(){
    const text= desc.value;
    const strAmnt= input_amount.value;
    const amount= parseInt(strAmnt);
    totalAmount+= amount;
    item_out.innerHTML= text;
    total_out.innerHTML= totalAmount;
}