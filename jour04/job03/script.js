// Défini par défaut dans loadPage
let currentId; // int
let currentName; // string
let selectedType; // string


async function fetchPokemonJSON() {
    try {
        const response = await fetch("pokemon.json");
        const json = await response.json();

        return json;
    } catch (error) {
        console.error(`Error fetching JSON: ${error}`);
        return false;
    };
}

function inArray(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}

async function getAllTypes() {
    try {
        allTypes = ["..."];

        const json = await fetchPokemonJSON();
        const typesOnly = json.map(item => item.type);

        for (let i = 0; i < typesOnly.length; i++) {
            for (let j = 0; j < typesOnly[i].length; j++) {
                if (!inArray(allTypes, typesOnly[i][j])) {
                    allTypes.push(typesOnly[i][j]);
                };
            };
        }

        return allTypes;

    } catch (error) {
        console.error(`Error getting all types: ${error}`);
        return false;
    };
}


function bindIdInput() {
    $("#idInput").on("input", function() {
        currentId = Number($("#idInput").val());
    });
}

function bindNameInput() {
    $("#nameInput").on("input", function() {
        currentName = $("#nameInput").val();
    });
}

function insertTypesIntoSelect(typeArray) {
    for (let i = 0; i < typeArray.length; i++) {
        $("#typeSelect").append(`<option 
            value="${typeArray[i]}">
            ${typeArray[i]}
        </option>`);
        $("#typeSelect").on("change", function() {
            selectedType = $("#typeSelect").val();
        });
    };
}

async function loadPage() {
    insertTypesIntoSelect(await getAllTypes())
    bindIdInput()
    bindNameInput()

    currentId = Number($("#idInput").val());
    currentName = $("#nameInput").val();
    selectedType = $("#typeSelect").val();
}


$(document).ready(function() {
    loadPage()
});