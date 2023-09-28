
const AC = document.getElementById('AC');
const DE = document.getElementById('DE');
const dot = document.getElementById('.');
const divide = document.getElementById('÷');

const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const multiply = document.getElementById('×');

const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const plus = document.getElementById('+');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const subtract = document.getElementById('-');

const doubleZero = document.getElementById('00');
const zero = document.getElementById('0');
const equal = document.getElementById('=');

const textInput = document.getElementById('displayArea');

//on click events
const click = (parameter) => {
    textInput.value += parameter;
}

const replace = () => {

    if(textInput.value.includes('÷')){
        textInput.value = textInput.value.replace('÷','/')
    }

    if(textInput.value.includes('×')){
        textInput.value = textInput.value.replace('×','*')
    }

    return textInput.value;
}

AC.onclick = () => textInput.value = '';
DE.onclick = () => textInput.value = textInput.value.toString().slice(0,-1);
dot.onclick = () => click(dot.value);
divide.onclick = () => click(divide.value);

seven.onclick = () => click(seven.value);
eight.onclick = () => click(eight.value);
nine.onclick = () => click(nine.value);
multiply.onclick = () => click(multiply.value);

four.onclick = () => click(four.value);
five.onclick = () => click(five.value);
six.onclick = () => click(six.value);
plus.onclick = () => click(plus.value);

one.onclick = () => click(one.value);
two.onclick = () => click(two.value);
three.onclick = () => click(three.value);
subtract.onclick = () => click(subtract.value);

doubleZero.onclick = () => click(doubleZero.value);
zero.onclick = () => click(zero.value);

equal.onclick = () => {
    try {
    const equation = buildEquation(textInput.value);
    console.log(equation)
        
        const answer = equation.reduce((value, curr) => {
            let currentValue = curr
            if(curr.includes("÷") || curr.includes("×")){
                currentValue = handleMultiplicationAndDivision(curr)
            }
            return value += parseNumber(currentValue, 0)
        }, 0)
        textInput.value = answer;
    } catch (error) {
        textInput.value = "Syntax Error";
    }
}


const buildEquation = (inputString) => {
    let equationIndex = 0;

    const splitChars = inputString.split('')

    return splitChars.reduce((accumulated, char, index) => {
        if(char === '+'){
            equationIndex++;
            return accumulated
        }else if(char === '-'){

            if(splitChars?.[index+1] === '-'){
                equationIndex++;
                return accumulated;
            }else if(splitChars?.[index-1] === '-'){
                return accumulated
            }

            equationIndex++
        }else if(char === "×"|| char === "÷"){

            isMultipliedOrDivided = true;

        }
        
        accumulated[equationIndex] = accumulated?.[equationIndex] ? `${accumulated[equationIndex]}${char}` : char;
        return accumulated;
    }, [])
}

const handleMultiplicationAndDivision = (value) => {
    const operators = ["×", "÷"];
    const operatorStack = [];
    const numberStack = [];
    let currentNumber = "";
  
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
  
      if (operators.includes(char)) {
        operatorStack.push(char);
        numberStack.push(parseFloat(currentNumber));
        currentNumber = "";
      } else {
        if (currentNumber === "" && (char === "-" || char === "+")) {
          currentNumber += char;
        } else {
          currentNumber += char;
        }
      }
    }
  
    numberStack.push(parseFloat(currentNumber));
  
    let result = numberStack[0];
    let i = 1;
  
    while (i < numberStack.length) {
      const operator = operatorStack.shift();
      const nextNumber = parseNumber(numberStack[i], 1);
  
      if (operator === "×") {
        result *= nextNumber;
      } else if (operator === "÷") {
        result /= nextNumber;
      }
  
      i++;
    }
  
    return result;
  };
  

const parseNumber = (inputNumber, defaultValue) => {
    try {
        return Number(inputNumber)
    }catch{
        return defaultValue
    }
}