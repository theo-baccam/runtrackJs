let count = 0

function addOne() {
    let current_count = document.getElementById("compteur").innerHTML;
    current_count = Number(current_count);
    document.getElementById("compteur").innerHTML = current_count + 1
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener("click", (addOne));
})