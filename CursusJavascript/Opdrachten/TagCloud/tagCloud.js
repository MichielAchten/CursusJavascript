
//het array met de tags
//elk item is zelf een Array met de naam, het huidig aantal stemmen en het vorig aantal stemmen die het kreeg
var arrTags = [
                ["Javascript", 1634, 987],
                ["jQuery", 1111, 34],
                ["PHP", 1024, 1122],
                ["Asp.Net", 977, 1005],
                ["Photoshop", 594, 789],
                ["XML", 40, 666],
                ["Access", 55, 77],
                ["Java", 278, 277],
                ["MySQL", 155, 122]
]

window.onload = function () {
    var eContainer = document.getElementById("tagContainer");
    var nArrTags = arrTags.length;

    for (var i = 0; i < nArrTags; i++) {
        var eSpan = document.createElement("p");
        var nVerschil = arrTags[i][1] - arrTags[i][2];
        //var posTop = Math.round(Math.random() * 500) + 0;
        //var posLeft = math.round(Math.random() * 400) + 0;
        eSpan.innerHTML = arrTags[i][0];
        if (nVerschil < 0) {
            eSpan.setAttribute("class", "rood");
        }
        else {
            eSpan.setAttribute("class", "groen");
        }
        var ngrootte = bepaalGrootte(arrTags[i][1]);
        //eSpan.setAttribute("style", ("font-size:" + ngrootte + "em; top:" + posTop + "px; left:" + posLeft + "px;"));
        eSpan.setAttribute("style", ("font-size:" + ngrootte + "em; top:" + 1000 + "px; left:" + 1000 + "px;"));
        eContainer.appendChild(eSpan);
    }
}

function bepaalGrootte(grootte) {
    var aGroottes = [
        [3200, 5],
        [1600, 4],
        [800, 3],
        [400, 2],
        [200, 1],
        [100, 0.5],
        [0, 0.25]
    ];

    for (var i = 0; i < aGroottes.length; i++) {
        if (grootte >= aGroottes[i][0]) {
            return aGroottes[i][1];
            break;
        }
    }
}