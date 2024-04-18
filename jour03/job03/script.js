const CORRECT_MATRIX = [
    ["logo1.PNG", "logo2.PNG", "logo3.PNG"],
    ["logo4.PNG", "logo5.PNG", "logo6.PNG"],
    ["logo7.PNG", "logo8.PNG", ""],
];


function getAllImages() {
    let allImages = [];

    for (let y = 0; y < CORRECT_MATRIX.length; y++) {
        for (let x = 0; x < CORRECT_MATRIX[y].length; x++) {
            allImages.push(CORRECT_MATRIX[y][x]);
        };
    };

    return allImages;
}

function drawRandomImageFrom(allImages) {
    let randomIndex = Math.floor(Math.random() * allImages.length);
    let randomImage = allImages[randomIndex];

    allImages.splice(randomIndex, 1);

    return randomImage;
}

function getShuffledMatrix() {
    let shuffledMatrix = [];
    let allImages = getAllImages();

    for (let y = 0; y < CORRECT_MATRIX.length; y++) {
        shuffledMatrix[y] = [];
        for (let x = 0; x < CORRECT_MATRIX[y].length; x ++) {
            shuffledMatrix[y][x] = drawRandomImageFrom(allImages);
        };
    };
    
    return shuffledMatrix;
}


$(document).ready(function() {
    console.log(getShuffledMatrix())
});