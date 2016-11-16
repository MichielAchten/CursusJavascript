
var aLanguages = [
            [
                ["Toon alle screenshots", "Verberg alle screenshots"],
                ["Toon dit screenshot", "Verberg dit screenshot"]
            ],
            [
                ["Montrez toutes captures d'écrans", "Cachez toutes capture d'écrans"],
                ["Montrez cette caputure d'écran", "Montrez cette capture d'écran"]
            ]
];

var bToonAlle = true;
var nLanguage = 0;

window.onload = function () {
    var eKnop = document.getElementById("hoofdknop");
    eKnop.innerHTML = aLanguages[nLanguage][0][1];
    var eScreens = document.querySelectorAll("img.screenshot");
    //console.log(eScreens.length);

    eKnop.addEventListener("click", function () {
        var self = this;
        toggleAlleFiguren(self, eScreens)
    });

    var nScreens = eScreens.length;
    for (var i = 0; i < nScreens; i++) {
        var eFig = eScreens[i];
        var eButton = document.createElement("button");
        eButton.innerHTML = aLanguages[nLanguage][1][1];
        eButton.addEventListener("click", toggleFiguur);
        eFig.parentNode.appendChild(eButton);
    }
}

function toggleFiguur() {
    var eScreen = getFiguur(this);
    var sDisplay = eScreen.style.display;
    //console.log(eScreen.nodeName, sDisplay);
    if (!sDisplay || sDisplay == "" || sDisplay == "block") {
        eScreen.style.display = "none";
        this.innerHTML = aLanguages[nLanguage][1][0];
    }
    else {
        eScreen.style.display = "block";
        this.innerHTML = aLanguages[nLanguage][1][1];
    }
}

function toggleAlleFiguren(eHoofdknop, eFiguren) {
    var nFiguren = eFiguren.length;
    if (bToonAlle === false) {
        for (var i = 0; i < nFiguren; i++) {
            eFiguren[i].style.display = "block";
            var eKnop = getKnop(eFiguren[i]);
            eKnop.innerHTML = aLanguages[nLanguage][1][1];
        }
        eHoofdknop.innerHTML = aLanguages[nLanguage][0][1];
    }
    else {
        for (var i = 0; i < nFiguren; i++) {
            eFiguren[i].style.display = "none";
            var eKnop = getKnop(eFiguren[i]);
            eKnop.innerHTML = aLanguages[nLanguage][1][0];
        }
        eHoofdknop.innerHTML = aLanguages[nLanguage][1][1];
    }
    bToonAlle = !bToonAlle;
}

function getKnop(eScreen) {
    return eScreen.parentNode.querySelector("button");
}

function getFiguur(eKnop) {
    return eKnop.parentNode.querySelector("img.screenshot");
}