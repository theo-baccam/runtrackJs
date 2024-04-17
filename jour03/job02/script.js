const CORRECT_RAINBOW_ORDER = [
    "arc1.png",
    "arc2.png",
    "arc3.png",
    "arc4.png",
    "arc5.png",
    "arc6.png",
]

let remainingImages = []


function bindImage(tagName) {
    $("#remainingImages").on("mouseenter", `#${tagName}`, function() {
        $(`#${tagName}`).css("background-color", "#BBDDFF")

    })
    $("#remainingImages").on("mouseleave", `#${tagName}`, function() {
        $(`#${tagName}`).css("background-color", "#FFFFFF")
    })
}

function initialImageLoad() {
    for (let i = 0; i < CORRECT_RAINBOW_ORDER.length; i++) {
        let imageName = CORRECT_RAINBOW_ORDER[i]
        let tagName = imageName.slice(0, -4)
        remainingImages.push(imageName)

        $("#remainingImages").append(`<img id="${tagName}" src="${imageName}">`);
        bindImage(tagName)
    }
}

function arrayShuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        
    }
}

function redisplayRemainingImages() {
    $("#remainingImages").empty()

    for (let i = 0; i < remainingImages.length; i++) {
        let imageName = remainingImages[i]
        let tagName = imageName.slice(0, -4)

        $("#remainingImages").append(`<img id="${tagName}" src="${imageName}">`);

        $("#remainingImages").on("mouseenter", `#${tagName}`, function() {
            $(`#${tagName}`).css("background-color", "#BBDDFF")

        })
        $("#remainingImages").on("mouseleave", `#${tagName}`, function() {
            $(`#${tagName}`).css("background-color", "#FFFFFF")
        })
    }
}

function bindShuffleButton() {
    $("body").on("click", "#shuffleButton", function() {
        arrayShuffle(remainingImages)
        redisplayRemainingImages()
    })
}


$(document).ready(function() {
    initialImageLoad()
    bindShuffleButton()
})