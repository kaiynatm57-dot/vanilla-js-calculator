let input="";


function appendToDisplay(value) {

    // prevent multiple starting zeros
    if (input === "" && value === "0") {
        input = "0";
    }

    // allow decimal at start → 0.
    else if (input === "" && value === ".") {
        input = "0.";
    }

    // allow decimal after 0 → 0.
    else if (input === "0" && value === ".") {
        input += ".";
    }

    // replace leading 0 with another number
    else if (input === "0" && value !== ".") {
        input = value;
    }
   // Prevent Multiple Decimals (3.4.5)
   //Add this check before adding ".".
   //if (value === "." && input.includes(".")) {
   // return;}
    // normal input
    else {
        input += value;
    }

    document.getElementById("inputLine").innerText = input;
}

function clearDisplay() {
    input = input.slice(0, -1);
    document.getElementById('inputLine').innerText = input || '0';
     
}
//AC button working
function allclear(){
    document.getElementById('inputLine').innerText = '';
    document.getElementById('outputLine').innerText = '';
    input = '';

}
function toggleSign() {
    // If input is empty, do nothing
    if (input === "") return;

    // If the number starts with '-', remove it; otherwise, add '-'
    if (input.charAt(0) === "-") {
        input = input.substring(1);
    } else {
        input = "-" + input;
    }
    //toggle sign
     //i am calling updateDisplay(), but this function does not exist anywhere in the  html code
    //updateDisplay();
    document.getElementById("inputLine").innerText = input;
}
function calculate() {
    try {
        //3.eval() works but is not safe in large projects.
        // but it is suitable for beginers
           input = eval(input);
        document.getElementById("outputLine").innerText = input;
        
    } catch (error) {
        // catch block error
//There is an error in catch block becuase i use display.value 
//for error but it dose not show error on display
        //display.value = 'Error';
         document.getElementById("outputLine").innerText = "Error";
    }
}
