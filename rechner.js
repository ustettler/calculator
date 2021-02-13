console.log("Calculator")
// selekti
let firstNumber = "";
let operator = "";
let secondNumber = "";
let display = document.querySelector(".display");

// Rechen aufgabe besteht aus. -zahlt operatot zahl-
// Hier werden 1. und 2. zahl ausgelesen
// Wenn operator leer ist, ist es erste zahl, wenn es ein operator gibt, zweitezahl
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

// operator geht erst wenn die 1. nummer exisiert
// wenn 1, nummer existiert, schreibe den operator hinein
function addOperator(op){

    if(firstNumber == ""){
        alert("erstmal eine Nummer")
        return
    } else {
    operator =  op
    // Anzeige des Operators mit Abstand auf beiden seiten
    display.value += " " + op + " "
    }
}

// rechen funktion ausführen
// Achtung, geht nur mit VAR!!

function showResult() {
    switch (operator) {
        case '*':
            var result = Number(firstNumber) * Number(secondNumber )
            display.value = result
            break;
        case '+':
            var result = Number(firstNumber) + Number(secondNumber)
            display.value = result
            break;
        case '-':
            var result = Number(firstNumber) - Number(secondNumber)
            display.value = result
            break;

        case '/':
            var result = Number(firstNumber) / Number(secondNumber)
            display.value = result
            break;
        
    }

    firstNumber = "";
    secondNumber = "";
    operator = "";



}

// Display leeren vor neuer Operation

/* display.addEventListener("click", () => {
display.value = ""
}) */

