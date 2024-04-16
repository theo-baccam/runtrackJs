function citation() {
    output = document.getElementById("citation").innerHTML
    console.log(output)
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener("click", (citation));
})