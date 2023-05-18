const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("#input");

buttons.forEach(button => { // Adds button value to the input
    button.addEventListener("click", () => {
        if (button.id !== "equal" && button.id !== "AC") {
            input.value += button.id;
        };   
    });
});

// reset via AC
const resetButton = document.querySelector("#AC");
resetButton.addEventListener("click", () => {
    input.value = "";
});

//calls calculate
const calculateButton = document.querySelector("#equal");
calculateButton.addEventListener("click", () => {
    calculate(input.value);
});

function calculate(inputString) {

    // Checks if there are only numbers and operators
    function validateInput(input) {
        const pattern = /^[+\-*/0-9\s]+$/; 
        return pattern.test(input);
    };
    
    let isValid = validateInput(inputString);

    // Evalutates
    if (isValid) {
        input.value = `${eval(inputString)}`;
    } else {
        input.value = "ERROR - Only enter number and operators"
    } 
};