
let display = document.querySelector('#display');

function appenedToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0,-1);
}

function calculator() {
    try {
        display.value = eval(display.value);
    } catch (error){
        display.value = 'Error';
    }
}
window.onload = clearDisplay;


























// function calculator(operator) {
//     var num1 = parseFloat(document.querySelector('#num1'));
//     var num2 = parseFloat(document.querySelector('#num2'));
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 + num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : 'connot divide by zero0';
//             break;
//         default :
//         result = 'Invalid operator';
//     }
//     document.querySelector('#result').innerHTML = "Result" + result;
// }