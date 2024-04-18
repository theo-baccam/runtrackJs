// `security.fileuri.strict_origin_policy` -> false (in firefox)

async function fetchWordsOfWisdom() {
    const response = await fetch("expression.txt");
    const response_text = await response.text();

    quote = response_text.split("\n")

    return quote
}

$(document).ready(function() {
    $("#button").on("click", async function() {
        const quote = await fetchWordsOfWisdom()
        for (line = 0; line < quote.length; line++) {
            $("body").append(`<p>${quote[line]}</p>`)
        }
    })
});