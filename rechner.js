console.log("Calculator")
// selektieren
let firstNumber = "";
let operator = "";
let secondNumber = "";
let display = document.querySelector(".display");
let button = document.querySelector(".button");

// Rechen aufgabe besteht aus. -zahlt operatot zahl-
// Hier werden 1. und 2. zahl ausgelesen
// Wenn operator leer ist, ist es erste zahl, wenn es ein operator gibt, zweitezahl
function addNumber(number){
    console.log("nummer: " + number)

    // display leeren
    display.value = "";

    if(operator == ""){
        display.value += number
        firstNumber += number
    } else {
        display.value += number
        secondNumber += number
    }

}

// Operator geht erst wenn die 1. nummer exisiert
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


        console.log("Resultat: " + result)

     // Nach erhalt vom Resultat, neue Zahl drücken, Display leeren und neue Rechnung schreiben
    /*    button.addEventListener("click", () => {

        if(result !== ""){
            display.value = "";
            result = "";
            console.log("Resultat2: " + result)
        } else {
            console.log("Resultat3: " + result)
            return
        }

    }) */

    // Alles leeren
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

/* Fragen :
Wiso funktioniert es nur mit der ersten Button klasse
Unterschied Var Let
Wiso geht input leere so nicht

zusätzlich dazu, display leeren, abstand zwischen zahl und op*/