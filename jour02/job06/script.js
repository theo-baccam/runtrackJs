const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let eventList = [];

let done = false;


function updateEventList(event) {
    eventList.push(event["key"])
    if (eventList.length > KONAMI_CODE.length) {
        eventList.shift()
    }
}

function userDidKonamiCode() {
    if (eventList.length !== KONAMI_CODE.length) {
        return false;
    }
    for (let i = 0; i < eventList.length; i++) {
        if (KONAMI_CODE[i] !== eventList[i]) {
            return false;
        }
    }
    return true;
}

function createPage() {
    let blue = document.createElement("div")
    document.body.appendChild(blue)

    blue.style.width = "100%"
    blue.style.height = "96px"
    blue.style.backgroundColor = "#005FFF"

    let text = document.createElement("p")
    blue.appendChild(text)

    text.style.color = "white"
    text.style.fontFamily = "Verdana, sans-serif"
    text.style.fontSize = "48px"
    text.innerHTML = "La Plateforme_"
}


document.addEventListener("DOMContentLoaded", () => {
    addEventListener("keydown", (event) => {
        updateEventList(event)
        if (userDidKonamiCode() && !done) {
            createPage();
            done = true;
        }
    });
});