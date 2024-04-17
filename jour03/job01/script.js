let textAdded = false;


function createText() {
    let quote = `
        Les logiciels et les cathédrales, c'est un peu la même chose, 
        - d'abord, on les construit, ensuite, on prie.
    `;

    if (textAdded) {
        $("p").show()
    } else {
        $("body").append(`<p>${quote}<p>`);
    }
}

function hideText() {
    if (!textAdded) {
        return;
    }

    $("p").hide()
}

function addHideText() {
    if (textAdded) {
        return;
    }

    $("#createText").after("<button id='hideText'></button>")
    $("body").on("click", "#hideText", function() {
        hideText();
    })
}

$(document).ready(function() {
    $("#createText").click(function() {
        createText();
        addHideText();
        textAdded = true;
    })
})