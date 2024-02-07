let billettene = []; //

function kjopBillett() {

    //Lager variabler ved å hente inn value fra html taggene
    let inputFilm = document.getElementById("filmer").value;
    let inputBilletter = document.getElementById("antallBilletter").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTlf = document.getElementById("telefonnr").value;
    let inputEpost = document.getElementById("epost").value;

    const billett = { //Lager et objekt. Setter inn variablene over.
        film: inputFilm,
        antall: inputBilletter,
        fornavn: inputFornavn,
        etternavn: inputEtternavn,
        telefonnummer: inputTlf,
        epost: inputEpost

    };

    if (billett.antall === "") {
        document.getElementById("errorAntall").innerHTML = "Må skrive noe inn i antall";

    } else {
        document.getElementById("errorAntall").innerHTML = "";
    }
    if (billett.fornavn === "") {
        document.getElementById("errorFornavn").innerHTML = "Må skrive noe inn i fornavn";
    } else {
        document.getElementById("errorFornavn").innerHTML = "";
    }
    if (billett.etternavn === "") {
        document.getElementById("errorEtternavn").innerHTML = "Må skrive noe inn i etternavn";
    } else {
        document.getElementById("errorEtternavn").innerHTML = "";
    }
    if (billett.telefonnummer === "") {
        document.getElementById("errorTelefonnr").innerHTML = "Må skrive noe inn i telefonnummer";
    } else {
        document.getElementById("errorTelefonnr").innerHTML = "";
    }
    if (billett.epost === "") {
        document.getElementById("errorEpost").innerHTML = "Må skrive noe inn i epost";
    } else {
        document.getElementById("errorEpost").innerHTML = "";
    }

    billettene.push(billett);
    //Setter inn objektet vi laget inn i arrayet.
    skrivUt();

    document.getElementById("filmer").value = "";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

}
function skrivUt() { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt i arrayet
    let ut = "";
    for (let i = 0; i < billettene.length; i++) {
        ut += billettene[i].film + " " + billettene[i].antall + " " + billettene[i].fornavn
            + " " + billettene[i].etternavn + " " + billettene[i].telefonnummer + " " + billettene[i].epost;
    }
    document.getElementById("utskrift").innerHTML = ut;
}
function slettAlleBillettene() {
    billettene = []; //Tømmer arrayet
    console.log(billettene);
    skrivUt();
}
