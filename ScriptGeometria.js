// JavaScript source code

function Triangolo() {
    //Salviamo tutti i valori e li convertiamo in interi
    let AB = parseInt(document.getElementById("AB").value);
    let BC = parseInt(document.getElementById("BC").value);
    let AC = parseInt(document.getElementById("AC").value);
    let messaggioperimetro = document.getElementById("perimetrotriangolo");
    let messaggioarea = document.getElementById("areatriangolo");
    /* Prima avevo messo questo controllo if (isNaN(AB) || isNaN(BC) || isNaN(AC)) etc..  ma cambianto la textbox ti constringe ad inserire solo numeri
    verrà tuttavia fatto un controllo sotto per verificare se sono numeri positivi*/
    if (AB >= 0 && BC >= 0 && AC >= 0) {
        // Uso var messaggio ("Per favore, inserisci valori numerici validi.");
        //Perimetro
        let Perimetro = AB + BC + AC;
        messaggioperimetro.innerHTML = "Perimetro: " + Perimetro;
        //Area con calcolo tramite il teorema di Erone
        let s = Perimetro / 2;
        var Area = Math.sqrt(s * (s - AB) * (s - BC) * (s - AC));

        //TO FIXED serve ad arrotondare a due numeri dopo la virgola
        messaggioarea.innerHTML = "Area: " + Area.toFixed(2);


        return;
    }
    else {
        messaggioperimetro.innerHTML = "Errore! Numero negativo!";
        messaggioarea.innerHTML = "Errore! Numero negativo!";
    }

}



function Rettangolo() {
    //Salviamo tutti i valori e li convertiamo in interi
    let ABret = parseInt(document.getElementById("ABret").value);
    let BCret = parseInt(document.getElementById("BCret").value);
    let messaggioperimetroret = document.getElementById("perimetrorettangolo");
    let messaggioarearet = document.getElementById("arearettangolo");
    /* Prima avevo messo questo controllo if (isNaN(AB) || isNaN(BC) || isNaN(AC)) etc..  ma cambianto la textbox ti constringe ad inserire solo numeri
    verrà tuttavia fatto un controllo sotto per verificare se sono numeri positivi*/
    if (ABret >= 0 && BCret >= 0) {
        // Uso var messaggio ("Per favore, inserisci valori numerici validi.");
        //Perimetro
        let Perimetroret = 2 * (ABret + BCret);
        messaggioperimetroret.innerHTML = "Perimetro: " + Perimetroret;
        //Calcolo area 
        let Arearet = ABret * BCret;

        //TO FIXED serve ad arrotondare a due numeri dopo la virgola
        messaggioarearet.innerHTML = "Area: " + Arearet.toFixed(2);
        return;
    }
    else {
        messaggioperimetroret.innerHTML = "Errore! Numero negativo!";
        messaggioarearet.innerHTML = "Errore! Numero negativo!";
    }
}




function Quadrato() {
    let ABquad = parseInt(document.getElementById("ABquad").value);
    let messaggioperimetroquad = document.getElementById("perimetroquad");
    let messaggioareaquad = document.getElementById("areaquad");
    if (ABquad >= 0) {

        //Perimetro
        let Perimetroquad = 4 * ABquad;
        messaggioperimetroquad.innerHTML = "Perimetro: " + Perimetroquad;
        //Calcolo area 
        let Areaquad = Math.pow(ABquad, 2);
        //Con Math pow fai l'elevazione a potenza

        messaggioareaquad.innerHTML = "Area: " + Areaquad.toFixed(2);
        return;
    }
    else {
        messaggioperimetroquad.innerHTML = "Errore! Numero negativo!";
        messaggioareaquad.innerHTML = "Errore! Numero negativo!";
    }
}


function Cerchio() {
    let raggio = parseInt(document.getElementById("raggio").value);
    let messaggioperimetrocerchio = document.getElementById("perimetrocerchio");
    let messaggioareacerchio = document.getElementById("areacerchio");
    if (raggio >= 0) {

        //Perimetro
        let diametro = raggio * 2;
        let Perimetrocerchio = diametro * 3.14;
        messaggioperimetrocerchio.innerHTML = "Perimetro: " + Perimetrocerchio.toFixed(2);
        //Calcolo area 

        let Areacerchio = 3.14 * Math.pow(raggio, 2);
        //Con Math pow fai l'elevazione a potenza

        messaggioareacerchio.innerHTML = "Area: " + Areacerchio.toFixed(2);
        return;
    }
    else {
        messaggioperimetrocerchio.innerHTML = "Errore! Numero negativo!";
        messaggioareacerchio.innerHTML = "Errore! Numero negativo!";
    }






}




