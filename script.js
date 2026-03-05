let FirstInput="";
let SecondInput="";
let op="";

const display = document.getElementById('display');
function appendToDisplay(input) {
    display.value += input;
   
}

function clearDisplay() {
    document.getElementById('display');
    display.value = display.value.slice(0, -1);
       
    
}
//AC button working
function allclear(){
    display.value="0"; 
}

function calculate() {
    try {
      
        display.value = eval(display.value);
        
    } catch (error) {
       
        display.value = 'Error';
    }
}