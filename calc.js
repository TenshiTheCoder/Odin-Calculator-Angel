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
let calculationPerformed = false;


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
    } else {
      calcDisplay.textContent += button.textContent;
    }

    if(calculationPerformed){
      clear();
      calculationPerformed = false;
      calcDisplay.textContent = button.textContent;
    }
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentOperator = button.textContent;
    firstNum = parseFloat(calcDisplay.textContent);
    console.log("First number is: ",firstNum);
    calcDisplay.textContent += button.textContent;
  });
});

equalsButton.addEventListener("click", () => {
  const operands = [parseFloat(calcDisplay.textContent)];
  const operators = [];
  // Get the operators from the calcDisplay.textContent
  for (let i = 0; i < calcDisplay.textContent.length; i++) {
    if (calcDisplay.textContent[i] === "+" || calcDisplay.textContent[i] === "-" || calcDisplay.textContent[i] === "*" || calcDisplay.textContent[i] === "/") {
      operators.push(calcDisplay.textContent[i]);
      operands.push(parseFloat(calcDisplay.textContent.substring(i + 1)));
    }
  }
  const result = evaluateExpression(operands, operators);
  console.log("Result:", result);
  calcDisplay.textContent = result.toString();
});


/* equalsButton.addEventListener("click", () => {
  if (currentOperator !== null) {
    secondNum = parseFloat(calcDisplay.textContent.replace(firstNum.toString() + currentOperator, ''));
    console.log("Second number is: ",secondNum);
    const result = operate(firstNum, currentOperator, secondNum);
    calculationPerformed = true;
    calcDisplay.textContent = result.toString();
    firstNum = result;
    secondNum = 0;
    currentOperator = null;
  }
});
*/
function operatorPriority(operator) {
  switch (operator) {
    case '*':
      return 4;
    case '/': 
      return 3;
    case '+':
      return 2;
    case '-':
      return 1;
    default:
      return 0;
  }
}

function evaluateExpression(operands, operators) {
  let result = operands[0];
  let i = 0;
  while (i < operators.length) {
    if (operators[i] === "*") {
      result = operate(result, operators[i], operands[i + 1]);
      i++;
    } else if (operators[i] === "/") {
      result = operate(result, operators[i], operands[i + 1]);
      i++;
    }
  }
  return result;
}

/* try {
  currentOperator = "/";
  secondNum = 0;
  if(currentOperator === "/" && secondNum === 0){
    throw new RangeError("Excuse you, dividing by 0 will crash the calculator");
  }
  operate(firstNum, currentOperator, secondNum);
} catch(error) {
  alert("What are you doing? Don't crash the calculator please!" + error.message);
  console.log(error);
}
*/

/*
Current goals:
  Clearing input when a user hits a number after a calculation; (Done)
  Decimal Implementation (done)
  PEMDAS implementation and pair-based calculation
*/