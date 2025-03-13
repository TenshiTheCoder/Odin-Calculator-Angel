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

  const operators = {
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
    currentInput = calcDisplay.textContent
  }

  equalsButton.addEventListener("click", equal);

}

console.log(operate(1 + 2));

/* What is the goal of the operator buttons? They need to not only display the symbol when clicked but perform the operation when the equals sign is pressed */