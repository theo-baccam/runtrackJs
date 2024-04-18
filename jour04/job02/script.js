async function jsonValueKey(jsonFile, key) {
    response = await fetch(jsonFile)
    data = await response.json()

    return data[key]
}

$(document).ready(async function() {
    const value = await jsonValueKey("example.json", "city")
    console.log(value)
});