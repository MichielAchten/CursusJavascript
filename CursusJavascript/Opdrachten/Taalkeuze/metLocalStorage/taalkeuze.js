/* TAALKEUZE */



function kiesTaal(eKeuze) {
    var sKeuze = eKeuze.id;
    switch (sKeuze) {
        case "nederlands":
            localStorage.setItem("taal", "nederlands");
            break;
        case "francais":
            localStorage.setItem("taal", "francais");
            break;
        case "english":
            localStorage.setItem("taal", "english");
            break;
    }
    window.history.go(0);
}

function verwijderTaalkeuze() {
    localStorage.clear();
    var url = "intropagina.html";
    top.location.href = url;
}
