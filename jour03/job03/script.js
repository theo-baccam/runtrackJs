const CORRECT_MATRIX = [
    ["00.png", "01.png", "02.png"],
    ["10.png", "11.png", "12.png"],
    ["20.png", "21.png", ""],
];
let gameMatrix = []
let win = false;


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
            let emptyPosition = neighborTile;
            return emptyPosition;
        };
    };

    return false;
}

function swapTile(y1, x1, y2, x2) {
    let value1 = gameMatrix[y1][x1];
    let value2 = gameMatrix[y2][x2];

    gameMatrix[y2][x2] = value1;
    gameMatrix[y1][x1] = value2;
}

function checkWin() {
    for (let y = 0; y < CORRECT_MATRIX.length; y++) {
        for (let x = 0; x < CORRECT_MATRIX.length; x++) {
            if (CORRECT_MATRIX[y][x] !== gameMatrix[y][x]) {
                return false;
            };
        };
    };

    return true;
}


function displayWinMessage() {
    $("body").append("<p id='winMessage'>Vous avez gagné</p>")
    $("#winMessage").css("color", "green")
}

function createGameMatrixHTML() {
    $("#gameMatrix").empty();

    for (let y = 0; y < gameMatrix.length; y++) {
        let rowId = `gameMatrix${y}`;
        $("#gameMatrix").append(`<div id="${rowId}"></div>`);
        $(`#${rowId}`).css("width", "100%");
        $(`#${rowId}`).css("height", "33%");

        for (let x = 0; x < gameMatrix[y].length; x++) {
            let tileImageFileName = gameMatrix[y][x];
            let tileId = `${rowId}${x}`;
            $(`#${rowId}`).append(`<img 
                id="${tileId}" 
                src="${tileImageFileName}"
            ></img>`);
            $(`#${tileId}`).css("width", "33%");
            $(`#${tileId}`).css("height", "100%");
            $(`#${tileId}`).css("object-fit", "cover");
            $(`#${tileId}`).on("click", function() {
                let emptyTile = checkMovable(y, x);
                if (emptyTile === false || win) {
                    return;
                };
                swapTile(y, x, emptyTile[0], emptyTile[1]);
                createGameMatrixHTML();
                win = checkWin();
                if (win) {
                    displayWinMessage()
                }
            });
        };
    };
}

function newGame() {
    win = false;
    $("#winMessage").remove()
    gameMatrix = getShuffledMatrix()
    createGameMatrixHTML()
}

function bindRestartButton() {
    $("#restart").on("click", function() {
        newGame()
    });
}



$(document).ready(function() {
    bindRestartButton()
    newGame()
});