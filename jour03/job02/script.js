const CORRECT_RAINBOW_ORDER = [
    "arc1.png",
    "arc2.png",
    "arc3.png",
    "arc4.png",
    "arc5.png",
    "arc6.png",
]

let playField = ["", "", "", "", "", ""]

let remainingImages = []


function getImageId(imageName) {
    let idName = imageName.slice(0, -4);
    return idName;
}

function createImage(imageName) {
    let idName = getImageId(imageName)
    $("#remainingImages").append(`<img 
        id="${idName}" 
        src="${imageName}"
        draggable="false" 
        class="image"
    >`);
}

function dragImage(imageName) {
    let idName = getImageId(imageName)
    $(`#${idName}`).css("position", "absolute")
    $("body").on("mousemove", function(event) {
        let x = event["pageX"]
        let y = event["pageY"]

        let width = $(`#${idName}`).width()
        let height = $(`#${idName}`).height()

        $(`#${idName}`).css("left", `${x - width / 2}px`)
        $(`#${idName}`).css("top", `${y - height / 2}px`)
    })
}

function bindImage(imageName, imageIndex) {
    let idName = getImageId(imageName)
    $(`#${idName}`).on("mousedown", function() {
        console.log(imageIndex)
        dragImage(imageName)
    }).on("mouseup", function() {
        $("body").off("mouseup")
        $("body").off("mousemove")
        redisplayRemainingImages()
    })
}

function initialImageLoad() {
    for (let i = 0; i < CORRECT_RAINBOW_ORDER.length; i++) {
        let imageName = CORRECT_RAINBOW_ORDER[i]
        remainingImages.push(imageName)

        createImage(imageName)
        bindImage(imageName, i)
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

        createImage(imageName)
        bindImage(imageName, i)
    }
}

function bindShuffleButton() {
    $("#shuffleButton").on("click", function() {
        arrayShuffle(remainingImages)
        redisplayRemainingImages()
    })
}

function createPlayFieldSlots() {
    for (let i = 0; i < playField.length; i++) {
        $("#playField").append(`<div id="slot${i}"></div>`)
        $(`#slot${i}`).css("height", "100%")
        $(`#slot${i}`).css("width", "16.66%")
        $(`#slot${i}`).on("mouseenter", function() {
            $(`#slot${i}`).css("background-color", "#DDEEFF")
        }).on("mouseleave", function() {
            $(`#slot${i}`).css("background-color", "transparent")
        })
    }
}


$(document).ready(function() {
    initialImageLoad()
    bindShuffleButton()
    createPlayFieldSlots()
})