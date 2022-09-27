// Grab all the buttons as in array
// loop through the array and add eveny listener to each button
//  when the button is clicked, get the button's value and store in a global variable
// grab the display element 
// add the value to the display element
// get all the buttons
const buttons =  document.querySelectorAll(".btn");

const displayElm = document.querySelector(".display");

const buttonsArray = Array.from(buttons);

let strToDisplay = "";
const operators = ["%", "+", "-", "*", "/"];
let lastOperator = "";
// const audio = new Audio("");


buttonsArray.map((btn)=> {
 
    btn.addEventListener("click", () => { 
        const val = btn.innerText;

        displayElm.style.background = "";
    displayElm.style.color = "black";
    displayElm.classList.remove("prank");
        // console.log(val);
    if ( val === "AC") {
        strToDisplay = "";
        display();
        return;
    }

    if ( val === "C"){
        strToDisplay = strToDisplay.slice(0, -1);
        return display(strToDisplay);
    }
    // returning the total value
    if (val === "="){
        const lastChar = strToDisplay [strToDisplay.length-1];
        if(operators.includes(lastChar)){
            strToDisplay = strToDisplay.slice(0, -1);
        }
        console.log(lastChar);
        return total();

    }
    // no operators at the end only numbers.

    if(operators.includes(val)){
        if (!strToDisplay) {
            return;
        }
        const lastChar = strToDisplay [strToDisplay.length-1];
    
        if(operators.includes(lastChar)){
        strToDisplay = strToDisplay.slice(0, -1);
    }
    lastOperator = val;
    }
// not more den one decimal point
    if ( val === ".") {


     if (lastOperator){
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator );
            const lastNumberSet = strToDisplay.slice(operatorIndex + 1);
            

            if(lastNumberSet.includes("."))
            {
                return;
            }
            console.log(operatorIndex);

    }
    if (!lastOperator && strToDisplay.includes(".")){
        return;
    }
    }
        
    strToDisplay += val;
        display(strToDisplay);
    });
    
});

const display  = (str) => {
    displayElm.innerText = str || "0.00";
};

const total = () => {
const extra = randomNumber();
if (extra > 0){
    displayElm.style.background = "red";
    displayElm.style.color = "white";
    displayElm.classList.add("prank");
}
 const ttl = eval(strToDisplay) + extra;
 display(ttl);
 strToDisplay = ttl.toString();
};

const randomNumber = () =>{
    const num = Math.random(Math.random () *10);
    return num < 7 ? num : 0;
};



