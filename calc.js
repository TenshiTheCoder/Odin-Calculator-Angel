const addButton = document.querySelector(".add"); 
const subtractButton = document.querySelector(".subtraction");
const multiplyButton = document.querySelector(".multiplication");
const divideButton = document.querySelector(".division");
const equalsButton = document.querySelector(".equals"); 
const numberButtons = document.querySelectorAll(".number"); /* Done for now*/
const calcClear = document.querySelector(".clear"); /* Logic Done for now */
const calcDisplay = document.querySelector(".display"); /* Logic Done for now */
const operatorButtons = document.querySelectorAll(".operator"); /* Display logic done */

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 !== 0 ? num1 / num2 : "ERROR";
let firstNum = 0;
let secondNum = 0;
let currentOperator = null;

function operate(firstNum, currentOperator, secondNum) {  
  switch(currentOperator){
    case "+":
      return add(firstNum, secondNum);
    case "-": 
      return subtract(firstNum, secondNum);
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
    default: 
    return "ERROR";
  }
}

/* Listeners for operators, numbers and equals button */

function clear(){
  calcDisplay.textContent = "";
  firstNum = 0;
  secondNum = 0;
  currentOperator = null;
}
calcClear.addEventListener("click", clear);
  
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(currentOperator === null){
      calcDisplay.textContent += button.textContent;
      if(firstNum === 0){
        firstNum = parseFloat(calcDisplay.textContent);
        console.log("First number is: ",firstNum);
      }
    } else {
      calcDisplay.textContent = firstNum.toString() + currentOperator + button.textContent;
    }
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentOperator = button.textContent;
    calcDisplay.textContent = firstNum.toString() + button.textContent;
    console.log(currentOperator);
  });
});

equalsButton.addEventListener("click", () => {
  if (currentOperator !== null) {
    secondNum = parseFloat(calcDisplay.textContent.replace(firstNum.toString() + currentOperator, ''));
    const result = operate(firstNum, currentOperator, secondNum);
    calcDisplay.textContent = result.toString();
    firstNum = result;
    secondNum = 0;
    currentOperator = null;
  }
});



