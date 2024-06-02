// JavaScript source code
var primoNum = 0;
var segnoCorrente = null;
var secondoNum = null;
function writeNumber(number) {

    var divDisplay = document.getElementById("display"); // div

    var displayContenuto = divDisplay.innerHTML; //assegno testo del div alla variabile


    if (displayContenuto == 0) {
        divDisplay.innerHTML = number;
    } else {
        divDisplay.innerHTML = displayContenuto + number;
    }

}
function writeSign(sign) {
    var divDisplay = document.getElementById("display");
    var displayContenuto = divDisplay.innerHTML;

    if (segnoCorrente == null) {
        divDisplay.innerHTML = displayContenuto + sign;
        segnoCorrente = sign;
    }
}

function reset() {

    var display = document.getElementById("display");
    display.innerHTML = 0;
    segnoCorrente = null;
    primoNum = 0;
    secondoNum = null;
}

function calculate() {
    return
}