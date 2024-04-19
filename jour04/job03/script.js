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

function filterById(pokemonArray) {
    const filteredById = (
        pokemonArray.filter(pokemon => pokemon.id === currentId)
    );
    return filteredById;
}

function objectIncludesValue(object, value) {
    for (const key in object) {
        if (object[key] === value) {
            return true;
        };
    };

    return false;
}

function filterByName(pokemonArray) {
    const filteredByName = (
        pokemonArray.filter(
            pokemon => objectIncludesValue(pokemon.name, currentName)
        )
    );
    return filteredByName;
}

function filterByType(pokemonArray) {
    const filteredByType = (
        pokemonArray.filter(pokemon => pokemon.type.includes(selectedType))
    );
    return filteredByType;
}

async function getFilteredPokemon() {
    const pokemonArray = await fetchPokemonJSON();
    let filteredPokemon = pokemonArray;

    if (currentId !== 0) {
        filteredPokemon = filterById(filteredPokemon);
    };
    if (currentName !== "") {
        filteredPokemon = filterByName(filteredPokemon);
    };
    if (selectedType !== "...") {
        filteredPokemon = filterByType(filteredPokemon);
    };

    return filteredPokemon;
}

async function getAllTypes() {
    try {
        allTypes = ["..."];

        const json = await fetchPokemonJSON();
        const typesOnly = json.map(item => item.type);

        for (let i = 0; i < typesOnly.length; i++) {
            let typesArray = typesOnly[i]
            for (let j = 0; j < typesArray.length; j++) {
                let type = typesArray[j]
                if (!allTypes.includes(type)) {
                    allTypes.push(type);
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

function getNameList(nameObject) {
    let nameList = [];
    for (const key in nameObject) {
        nameList.push(nameObject[key])
    }

    return nameList
}

async function loadTable() {
    $("#pokemonTable").empty()
    const results = await getFilteredPokemon()

    $("#pokemonTable").append(`
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
        </tr>
    `)

    for (let i = 0; i < results.length; i++) {
        let pokemon = results[i]
        $("#pokemonTable").append(`
            <tr>
                <td>${pokemon.id}</td>
                <td>${getNameList(pokemon.name).toString()}</td>
                <td>${pokemon.type.toString()}</td>
            </tr>
        `)
    }
}

function bindFilterButton() {
    $("#filterButton").on("click", function() {
        loadTable()
    });
}


async function loadPage() {
    insertTypesIntoSelect(await getAllTypes())
    bindIdInput()
    bindNameInput()
    bindFilterButton()

    currentId = Number($("#idInput").val());
    currentName = $("#nameInput").val();
    selectedType = $("#typeSelect").val();

    loadTable()
}


$(document).ready(function() {
    loadPage()
});