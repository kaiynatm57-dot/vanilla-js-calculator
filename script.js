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

    // normal input
    else {
        input += value;
    }

    document.getElementById("inputLine").innerText = input;
}

function clearDisplay() {
    input = input.slice(0, -1);
    document.getElementById('inputLine').innerText = input;
     
}
//AC button working
function allclear(){
    document.getElementById('inputLine').innerText = '';
    document.getElementById('outputLine').innerText = '';
    input = '';
}

function calculate() {
    try {
      
        input = eval(input);
        document.getElementById("outputLine").innerText = input;
        
    } catch (error) {
       
        display.value = 'Error';
    }
}