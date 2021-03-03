const currDisplay = document.querySelector('.currDisplay');
const numDisplay = document.querySelector('.numDisplay');
const btnPad = document.querySelector('.btn-pad');
let savedOperand = '';
let currOperator = '';
let operator = '';

const operatingObject = {
    '': function(firstValue, secondValue) {return secondValue;},
    '+': function(firstValue, secondValue) {return firstValue + secondValue;},
    '-': function(firstValue, secondValue) {return firstValue - secondValue;},
    '*': function(firstValue, secondValue) {return firstValue * secondValue;},
    '/': function(firstValue, secondValue) {return firstValue / secondValue;}
}
class calc {
    constructor(firstValue,secondValue){
        this.firstOperand = firstValue;
        this.secondOperand = secondValue;
    }

    operateFunc = (operator) => {
        console.log('operating function');
        operatingObject[operator](this.firstOperand, this.secondOperand );
    }    
}

clear = () => {
    numDisplay.textContent = 0;
}

clearAll = () => {
    clear();
    savedOperand = '';
    currOperator = '';
    operator = '';
}

// enter the input
inputDigit = (target) => {
    if(target.dataset.action === 'type'){
        if(numDisplay.textContent === '0'){
            numDisplay.textContent = target.dataset.value;
            return; 
        }else{
            numDisplay.textContent += target.dataset.value;
        }
    }
}

btnPad.addEventListener('click', e => {
    const { target } = e ;
    currDisplay.textContent = target.dataset.value;
    inputDigit(target);

    if (target.dataset.action !== 'opr') {
        return;
    }
    console.log('savedOperand is ' + savedOperand);
    let currentOperand = numDisplay.textContent;  // get the value in calculator display
       
    numDisplay.textContent = '';

    console.log('operator is ' + operator);

    const newCal = new calc(savedOperand, currentOperand);
    savedOperand = newCal.operateFunc(operator);
    console.log('result is ' + savedOperand);

    operator = currDisplay.textContent;
    savedOperand = currentOperand;
})
