const currbtn = document.querySelector('.currentbtn');
const nums = document.querySelector('.nums');
const btns = document.querySelectorAll('.btn');


class calculator {
    constructor(displayVal,firstOperand,operator,secondOperand){
        this.displayVal = displayVal;
        this.firstOperand =  firstOperand;
        this.secondOperand = secondOperand;
        this.operator = operator;
    }
    updateDisplay(){
        nums.textContent = this.displayVal;
    }
};

const calculator1 = new calculator('0','null','null','null');
calculator1.updateDisplay();


if(calculator1.firstOperand == 'null'){
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            const cls = e.target.getAttribute('class');
            const btnVal = e.target.getAttribute('btn-value');
    
            currbtn.textContent = btnVal;
     
            if(cls.includes('b-nums')) {
                nums.innerHTML += `${btnVal}`;
            }
    
            if(cls.includes('opr')){
                
                // const calculator3 = new calculator(nums.textContent,nums.textContent,e.target.textContent,'null');
                // console.log(calculator3);
                
    
                // calculator1.updateDisplay(); 
            }
        })
    });

    calculaotr2 = new calculator(nums.textContent,nums.textContent,)
    console.log(calculator2);

}else{
    console.log('notnull');

}
