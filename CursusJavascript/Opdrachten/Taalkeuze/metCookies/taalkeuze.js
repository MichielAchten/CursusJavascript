/* TAALKEUZE */



function kiesTaal(eKeuze) {
    var sKeuze = eKeuze.id;
    switch (sKeuze) {
        case "nederlands":
            setCookie("taal", "nederlands", 100);
            break;
        case "francais":
            setCookie("taal", "francais", 100);
            break;
        case "english":
            setCookie("taal", "english", 100);
            break;
    }
    window.history.go(0);
}

function verwijderTaalkeuze() {
    clearCookie("taal");
    var url = "intropagina.html";
    top.location.href = url;
}
