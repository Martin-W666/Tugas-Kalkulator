//--01----------CALC SCREEN & UPDATE-------------------
const calcScreen = document.querySelector(".calc-screen");

const updateScreen = (number) => {
    calcScreen.value = number;
}

let prevNumber = '';
let calcOperator = '';
let currNumber = '0';

//--02----------OPERATORS EVENTS-------------------
const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    prevNumber = currNumber;
    calcOperator = operator;
    currNumber = '';
    
    
}

//--03----------NUMBER EVENTS-------------------
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value); //value is assigned first input first
        updateScreen(currNumber); //push new number to screen
    }); 
});

const inputNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number
    } else {
        currNumber += number //string concentation because 'currNumber' stored as a string
    }
}

//--04----------CALCULATION-------------------
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currNumber);
});

const calculate = () => {
    let result ='';
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currNumber);
            break
        default:
            break
    }
    currNumber = result;
    calcOperator = '';

}

//--05----------AC BUTTON-------------------
const ac = document.querySelector(".ac");
ac.addEventListener('click', () => {
    clear();
    updateScreen(currNumber);
})

const clear = () => {
    prevNumber = '';
    calcOperator = '';
    currNumber = '0';
}



//--06----------DECIMALS-------------------
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

inputDecimal = (dot) => {
    currNumber += dot
}

//--07----------PERCENTAGE-------------------
const percent = document.querySelector(".percentage");

ac.addEventListener('click', () => {
    currNumber = '0';
    updateScreen(currNumber);
});


//for (let i=0, i>0, i++){
