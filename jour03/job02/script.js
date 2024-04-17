const CORRECT_RAINBOW_ORDER = [
    "arc1.png",
    "arc2.png",
    "arc3.png",
    "arc4.png",
    "arc5.png",
    "arc6.png",
]


function loadImages() {
    for (let i = 0; i < CORRECT_RAINBOW_ORDER.length; i++) {
        let imageName = CORRECT_RAINBOW_ORDER[i]
        let tagName = imageName.slice(0, -4)

        $("#remainingImages").append(`<img id="${tagName}" src="${imageName}">`);
        console.log(`#${imageName}`)

        $("#remainingImages").on("mouseenter", `#${tagName}`, function() {
            $(`#${tagName}`).css("background-color", "#BBDDFF")

        })
        $("#remainingImages").on("mouseleave", `#${tagName}`, function() {
            $(`#${tagName}`).css("background-color", "#FFFFFF")
        })
    }
}


$(document).ready(function() {
    loadImages()
})