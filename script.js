
// SELECT DOM ELEMENTS


// Get display input field
const display = document.getElementById("display");

// Get all buttons
const buttons = document.querySelectorAll(".btn");

// MAIN LOGIC: HANDLE BUTTON CLICKS

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        // CLEAR BUTTON LOGIC
        // If user clicks "C", clear the display completely
        if (button.classList.contains("clear")) {
            display.value = "";
        }

        // EQUAL BUTTON LOGIC
        // If user clicks "=", evaluate the expression
        else if (button.classList.contains("equal")) {
            try {
                // Evaluate mathematical expression safely
                display.value = eval(display.value);
            } catch {
                // If expression is invalid, show error
                display.value = "Error";
            }
        }
        
        // BACKSPACE BUTTON LOGIC
        // If user clicks "Backspace", remove last character from display
        else if (button.classList.contains("backspace")) {
            display.value = display.value.slice(0, -1);
        }

        // NUMBER & OPERATOR LOGIC

        // Otherwise, append clicked value to display
        else {
            display.value += value;
        }

    });
});
//keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Numbers & operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" || key === "-" ||
        key === "*" || key === "/" ||
        key === "."
    ) {
        display.value += key;
    }

    // Enter key → calculate
    else if (key === "Enter") {
        try {
            if (display.value !== "") {
                display.value = eval(display.value);
            }
        } catch {
            display.value = "Error";
        }
    }

    // Backspace key → delete last character
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape key → clear all
    else if (key === "Escape") {
        display.value = "";
    }
});