

function operate(operator, num1, num2) {

    if (num2 === 0) { return 'ERROR'; }

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '÷':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return 'ERROR'
    }

}

let equation = document.getElementById('equation');
let solution = document.getElementById('solution');

let number = '';
let equationArray = [];
let solutionValue = 0;


/* Button Functions */

/* Making an equation and make it displayed */
const numButtons = document.querySelectorAll('button.num');

numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        number += e.target.textContent;
        solution.innerHTML = number;
    });
});

const operatorButtons = document.querySelectorAll('button.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        if (solutionValue === 0) {
            equationArray.push(Number(number));
            equationArray.push(e.target.textContent);
        } else {
            equationArray = [];
            equationArray.push(solutionValue);
            equationArray.push(e.target.textContent);
        }

        equation.innerHTML = equationArray.join(' ');
        solution.innerHTML = '';
        number = '';
    });
});

/* Result Button */
const resultButton = document.getElementById('result');
resultButton.addEventListener('click', () => {
    equationArray.push(Number(number));

    solutionValue = operate(equationArray[1], equationArray[0], equationArray[2]);

    equation.innerHTML = equation.innerHTML = equationArray.join(' ');
    solution.innerHTML = Math.ceil(solutionValue * 1000000000) / 1000000000;
    number = '';
});

/* AC Button */
const acButton = document.getElementById('ac');
acButton.addEventListener('click', () => {
    equationArray = [];
    number = '';
    solutionValue = 0;
    equation.innerHTML = '';
    solution.innerHTML = '';
});

/* Del Button */
const delButton = document.getElementById('del');
delButton.addEventListener('click', () => {
    equationArray = pop();

});

/* . Button */
const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', (e) => {
    number += e.target.textContent;
    solution.innerHTML = number;
});

/* Sign Button */
const signButton = document.getElementById('sign');
signButton.addEventListener('click', () => {
    if (number[0] !== '-') {
        number = '-' + number;
        solution.innerHTML = number;
    } else {
        number = number.slice(1);
        solution.innerHTML = number;
    }
});