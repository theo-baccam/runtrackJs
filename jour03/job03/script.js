const CORRECT_MATRIX = [
    ["logo1.PNG", "logo2.PNG", "logo3.PNG"],
    ["logo4.PNG", "logo5.PNG", "logo6.PNG"],
    ["logo7.PNG", "logo8.PNG", ""],
];
let gameMatrix = []



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

function checkMovable(tileY, tileX) {
    currentTile = gameMatrix[tileY][tileX]

    let up = null;
    let down = null;
    let left = null;
    let right = null;

    let neightborTiles = []

    if (tileY !== 0) {
        up = [tileY - 1, tileX];
        neightborTiles.push(up);
    };
    if (tileY !== 2) {
        down = [tileY + 1, tileX];
        neightborTiles.push(down);
    };
    if (tileX !== 0) {
        left = [tileY, tileX - 1];
        neightborTiles.push(left);
    };
    if (tileX !== 2) {
        right = [tileY, tileX + 1];
        neightborTiles.push(right);
    };

    for (let i = 0; i < neightborTiles.length; i++) {
        let neighborTile = neightborTiles[i];
        let neighborTileY = neighborTile[0];
        let neighborTileX = neighborTile[1];

        if (gameMatrix[neighborTileY][neighborTileX] === "") {
            emptyPosition = neighborTile;
            return emptyPosition;
        };
    };

    return false;
}

function swapTile(y1, x1, y2, x2) {
    value1 = gameMatrix[y1][x1]
    value2 = gameMatrix[y2][x2]

    gameMatrix[y2][x2] = value1
    gameMatrix[y1][x1] = value2
}



$(document).ready(function() {
    gameMatrix = getShuffledMatrix()
    console.log(gameMatrix)
});