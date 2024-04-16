function addToTextArea(event) {
    document.getElementById("keylogger").value += event["key"]
}

document.addEventListener("DOMContentLoaded", () => {
    addEventListener("keypress", (event) => {addToTextArea(event)})
})