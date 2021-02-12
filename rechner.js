console.log("Calculator")
let firstNumber = "";
let operator = "";
let secondNumber = "";
let display = document.querySelector(".display");

function addNumber(number){
    console.log(number)

    if(operator == ""){
        display.value += number
        firstNumber += number
    } else {
        display.value += number
        secondNumber += number
    }

}

function addOperator(op){

    if(firstNumber == ""){
        alert("erstmal eine Nummer")
        return
    } else {
    operator = op
    display.value += op
    }
}

function showResult() {
    switch (operator) {
        case '*':
        let result = Number(firstNumber) * Number(secondNumber)
        display.value = result
            break;
        case '+':
           // Hier weiter machen mit Ausrechnung

            break;
        case '-':

            break;

        case '/':
            
            break;
        
    }

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

//Display leeren vor neuer Operatin