const SPECIAL_ASCII_CHARACTERS = "!@#$%^&*()_-+=[]{}|;:,.<>?";

function isInputFilled(input) {
    return input.val() !== "";
}

function isInputRequiredLength(input, requiredLength) {
    return input.val().length >= requiredLength;
}


function allSignUpInputsFilled() {
    const allSignUpInputs = [
        $("#signUpLastNameInput"),
        $("#signUpFirstNameINput"),
        $("#signUpEmailInput"),
        $("#signUpPasswordInput"),
        $("#signUpAddressInput"),
        $("#signUpPostalCodeInput")
    ];

    for (let i = 0; i < allSignUpInputs.length; i++) {
        if (!isInputFilled(allSignUpInputs[i])) {
            return `<span class="message">
                Veuillez remplir tous les champs
            </span>`;
        };
    };

    return "";
}

function verifyLastName() {
    const lastName = $("#signUpLastNameInput")
    if (!isInputRequiredLength(lastName, 3)) {
        return `<span class="message">
            Le nom doit faire au moins 3 caractères
        </span>`;
    }

    return "";
}

function verifyFirstName() {
    const firstName = $("#signUpFirstNameInput")
    if (!isInputRequiredLength(firstName, 3)) {
        return `<span class="message">
            Le prénom doit faire au moins 3 caractères
        </span>`;
    }

    return "";
}

function verifyPassWord() {
    const password = $("#signUpPasswordInput")
    if (!isInputRequiredLength(password, 8)) {
        return `<span class="message">
            Le mot de passe doit faire au moins 8 caractères
        </span>`;
    }

    return "";
}


async function displayMessages() {
    $(".message").remove()

    const allStatus = await allSignUpInputsFilled()
    const lastNameStatus = await verifyLastName()
    const firstNameStatus = await verifyFirstName()
    const passwordStatus = await verifyPassWord()

    $("form").prepend(allStatus)
    $("#signUpLastNameInput").after(lastNameStatus)
    $("#signUpFirstNameInput").after(firstNameStatus)
    $("#signUpPasswordInput").after(passwordStatus)
}

$(document).ready(function() {
    displayMessages()
    $("body").on("input", async function() {
        displayMessages()
    })
});