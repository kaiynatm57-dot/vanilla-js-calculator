let input="";


function appendToDisplay(value) {
    input += value;
    document.getElementById("inputLine").innerText = input;
}

function clearDisplay() {
    document.getElementById('inputLine').innerText = '';
    input = '';
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