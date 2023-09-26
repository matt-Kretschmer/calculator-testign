
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
equal.onclick = () => textInput.value = eval(replace());