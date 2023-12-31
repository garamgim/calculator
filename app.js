

function operate(operator, num1, num2) {


    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '÷':
            if (num2 === 0) { return 'ERROR'; }
            else return num1 / num2;
        case '%':
            if (num2 === 0) { return 'ERROR'; }
            else return num1 % num2;
        default:
            return 'ERROR'
    }

}



/* Display DOM */

let equation = document.getElementById('equation');
let solution = document.getElementById('solution');



/* Variables for functions */

let number = '';
let equationArray = [];
let solutionValue = "empty";



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

        if (number !== '') {

            if (solutionValue === "empty" && equationArray.length !== 2) {

                console.log(number);
                console.log(Number(number));
                equationArray.push(Number(number));
                equationArray.push(e.target.textContent);

            } else if (equationArray.length === 2) {

                equationArray.push(Number(number));
                solutionValue = operate(equationArray[1], equationArray[0], equationArray[2]);

                equationArray = [];
                equationArray.push(solutionValue);
                equationArray.push(e.target.textContent);

            } else {

                equationArray = [];
                equationArray.push(solutionValue);
                equationArray.push(e.target.textContent);

            }

            equation.innerHTML = equationArray.join(' ');
            solution.innerHTML = '';
            number = '';

        }

    });
});




/* Result Button */

const resultButton = document.getElementById('result');
resultButton.addEventListener('click', () => {

    if (number !== '' && equationArray.length === 2) {
        equationArray.push(Number(number));

        solutionValue = operate(equationArray[1], equationArray[0], equationArray[2]);

        equation.innerHTML = equationArray.join(' ');
        solution.innerHTML = Math.ceil(solutionValue * 100000000000) / 100000000000;
        number = solutionValue;
    }

});



/* AC Button */

const acButton = document.getElementById('ac');
acButton.addEventListener('click', () => {
    equationArray = [];
    number = '';
    solutionValue = "empty";
    equation.innerHTML = '';
    solution.innerHTML = '';
});



/* Del Button */

const delButton = document.getElementById('del');
delButton.addEventListener('click', () => {
    number = number.slice(0, -1);
    solution.innerHTML = number;
});



/* '.' Button */

const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', (e) => {
    if (number.includes('.') === false) {
        number += e.target.textContent;
        solution.innerHTML = number;
    }
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