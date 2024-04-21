const ALL_LOGIN_INPUTS = [
    "#loginEmailInput",
    "#loginPasswordInput"
];


function isInputFilled(input) {
    return input.val() !== "";
}


function allLoginInputsFilled() {
    for (let i = 0; i < ALL_LOGIN_INPUTS.length; i++) {
        if (!isInputFilled($(ALL_LOGIN_INPUTS[i]))) {
            return `<span class="message">
                Veuillez remplir tous les champs
            </span>`
        }
    }
    return ""
}


async function displayMessages() {
    $(".message").remove();

    const allStatus = await allLoginInputsFilled();
    $("form").prepend(allStatus);
}


$(document).ready(function() {
    displayMessages();
    $("body").on("input", async function() {
        displayMessages();
    });
});