let style = "block"

function showhide() {
    document.getElementById("citation").style.display = "none";
    if (style === "none") {
        document.getElementById("citation").style.display = "block";
        style = "block"
    } else {
        document.getElementById("citation").style.display = "none";
        style = "none"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showhide()

    let button = document.getElementById("button")
    button.addEventListener("click", (showhide));
})