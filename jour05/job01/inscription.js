const ALL_SIGN_UP_INPUTS = [
    "#signUpLastNameInput",
    "#signUpFirstNameInput",
    "#signUpEmailInput",
    "#signUpPasswordInput",
    "#signUpAddressInput",
    "#signUpPostalCodeInput"
];


function isInputFilled(input) {
    return input.val() !== "";
}

function isInputRequiredLength(input, requiredLength) {
    return input.val().length >= requiredLength;
}


function allSignUpInputsFilled() {
    for (let i = 0; i < ALL_SIGN_UP_INPUTS.length; i++) {
        if (!isInputFilled($(ALL_SIGN_UP_INPUTS[i]))) {
            return `<span class="message">
                Veuillez remplir tous les champs
            </span>`;
        };
    };

    return "";
}

function verifyLastName() {
    const lastName = $("#signUpLastNameInput");
    if (!isInputRequiredLength(lastName, 3)) {
        return `<span class="message">
            Le nom doit faire au moins 3 caractères
        </span>`;
    };

    return "";
}

function verifyFirstName() {
    const firstName = $("#signUpFirstNameInput");
    if (!isInputRequiredLength(firstName, 3)) {
        return `<span class="message">
            Le prénom doit faire au moins 3 caractères
        </span>`;
    };

    return "";
}

function verifyEmail() {
    const EMAIL_REGEX =  /([a-zA-Z\d_\-.]+)@([a-zA-Z\d_\-.]+)\.([a-zA-Z]+)/;
    const email = $("#signUpEmailInput");

    if (email.val().search(EMAIL_REGEX) !== 0) {
        return `<span class="message">
            Adresse mail invalide 
        </span>`;
    };
}

function verifyPassword() {
    const LOWERCASE = /[a-z]/;
    const UPPERCASE = /[A-Z]/;
    const DIGITS = /[0-9]/;
    const SPECIAL_CHARACTERS = (
        /[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\|,\.\/<>?]/
    );

    const password = $("#signUpPasswordInput");

    if (!isInputRequiredLength(password, 8)) {
        return `<span class="message">
            Le mot de passe doit faire au moins 8 caractères
        </span>`;
    } else if (password.val().search(LOWERCASE) === -1) {
        return `<span class="message">
            Le mot de passe doit inclure au moins une lettre miniscule
        </span>`;
    } else if (password.val().search(UPPERCASE) === -1) {
        return `<span class="message">
            Le mot de passe doit inclure au moins une lettre majuscule
        </span>`;
    } else if (password.val().search(DIGITS) === -1) {
        return `<span class="message">
            Le mot de passe doit inclure au moins un chiffre
        </span>`;
    } else if (password.val().search(SPECIAL_CHARACTERS) === -1) {
        return `<span class="message">
            Le mot de passe doit inclure au moins 1 caractère spécial ASCII 
        </span>`;
    };

    return "";
}

async function verifyAddress() {
    const address = $("#signUpAddressInput");

    if (!isInputRequiredLength(address, 6)) {
        return `<span class="message">
            L'addresse doit faire au moins 6 caractères 
        </span>`;
    };

    return "";
}

async function verifyPostalCode() {
    const postalCode = $("#signUpPostalCodeInput");

    if (!isInputRequiredLength(postalCode, 2)) {
        return `<span class="message">
            Le code postal doit faire au moins 2 caractères 
        </span>`;
    };

    return "";
}


async function displayMessages() {
    $(".message").remove();

    const allStatus = await allSignUpInputsFilled();
    const ALL_INPUT_STATUS = [
        await verifyLastName(),
        await verifyFirstName(),
        await verifyEmail(),
        await verifyPassword(),
        await verifyAddress(),
        await verifyPostalCode()
    ];

    $("form").prepend(allStatus);
    for (let i = 0; i < ALL_SIGN_UP_INPUTS.length; i++) {
        $(ALL_SIGN_UP_INPUTS[i]).after(ALL_INPUT_STATUS[i])
    };
}


$(document).ready(function() {
    displayMessages();
    $("body").on("input", async function() {
        displayMessages();
    });
});