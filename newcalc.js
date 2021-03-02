const currDisplay = document.querySelector('.currDisplay');
const numDisplay = document.querySelector('.numDisplay');
const btnPad = document.querySelector('.btn-pad');
let savedOperand = '';
let currOperator = '';


class calc {
    constructor(firstValue,secondValue){
        this.firstOperand = firstValue;
        // this.Operator = Operator;
        this.secondValue = secondValue;
    }    
}

clear = () => {
    numDisplay.textContent = 0;
}

clearAll = () => {
    clear();
    savedOperand = '';
    currOperator = '';
}

typingDigits = (target) => {
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
    const {target} = e;
    
    currDisplay.textContent = target.dataset.value;
    typingDigits(target);
    
    let currentOperand = numDisplay.textContent;
    
    
    newCal = new calc(savedOperand, currentOperand);
    newCal.operateFunc();
    
    savedOperand = currentOperand;
    currOperator = operator;
})
