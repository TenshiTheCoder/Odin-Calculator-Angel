const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtraction");
const multiplyButton = document.querySelector(".multiplication");
const divideButton = document.querySelector(".division");
const equalsButton = document.querySelector(".equals");
const numberButtons = document.querySelectorAll(".number"); /* Logic Done for now */
const calcClear = document.querySelector(".clear"); /* Logic Done for now */
const calcDisplay = document.querySelector(".display"); /* Logic Done for now */

const calculator = function(a, operator, b) {
  const num1 = a;
  const num2 = b;

  const add = function(num1, num2) {
    let sum = num1 += num2;
    return sum;
  };
  
  const subtract = function(num1, num2) {
    let subtraction = num1 -= num2
    return subtraction;
  };
  
  const multiply = function(arr) {
    return arr.reduce((total, num) => total * num, 1);
  };
    
  const divide = function(num1, num2){
    return num1 / num2
  }

  const operatorFunctions = {
    '+': (num1, num2) => {
      return add(num1, num2)
    },

    '-': (num1, num2) => {
      return subtract(num1, num2)
    },

    '*': (num1, num2) => {
      return multiply([num1, num2])
    },

    '/': (num1, num2) => {
      return divide(num1, num2)
    }
  };

  function clear(){
    calcDisplay.textContent = ""
  }
  calcClear.addEventListener("click", clear);
  
  numberButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        calcDisplay.textContent += button.textContent;
      }
    });
  });
  
  function equal(currentInput){
    let numbers = [];
    let operators = [];
    let currentTotal = numbers[0];
    currentInput = calcDisplay.textContent;
    splitInput = currentInput.split(/[+/-*/]/);
    splitInput.forEach(item => {
      if(!isNaN(item)) {
        numbers.push(parseFloat(item));
      } else if (["+", "-", "*", "/"].includes(item)){
        operators.push(item);
      }
    })
    numbers.reduce((accumulator, currentValue) => {
      const operator = operators[index - 1];
      return operatorFunctions[operator](accumulator, currentValue);
    }, currentTotal);
  }
  equalsButton.addEventListener("click", equal);
}



