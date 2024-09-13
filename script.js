let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'btn-0':
            case 'btn-1':
            case 'btn-2':
            case 'btn-3':
            case 'btn-4':
            case 'btn-5':
            case 'btn-6':
            case 'btn-7':
            case 'btn-8':
            case 'btn-9':
                if (operator === '') {
                    num1 += button.textContent;
                    display.value = num1;
                } else {
                    num2 += button.textContent;
                    display.value = num2;
                }
                break;
            case 'btn-add':
            case 'btn-subtract':
            case 'btn-multiply':
            case 'btn-divide':
            case 'btn-modulo':
                operator = button.textContent;
                display.value = '';
                break;
            case 'btn-clear':
                num1 = '';
                num2 = '';
                operator = '';
                result = '';
                display.value = '';
                break;
            case 'btn-equals':
                if (operator === '+') {
                    result = parseFloat(num1) + parseFloat(num2);
                } else if (operator === '-') {
                    result = parseFloat(num1) - parseFloat(num2);
                } else if (operator === '*') {
                    result = parseFloat(num1) * parseFloat(num2);
                } else if (operator === '/') {
                    if (parseFloat(num2) !== 0) {
                        result = parseFloat(num1) / parseFloat(num2);
                    } else {
                        result = 'Error: Division by zero';
                    }
                } else if (operator === '%') {
                    if (parseFloat(num2) !== 0) {
                        result = parseFloat(num1) % parseFloat(num2);
                    } else {
                        result = 'Error: Division by zero';
                    }
                }
                display.value = result;
                num1 = '';
                num2 = '';
                operator = '';
                break;
        }
    });
});