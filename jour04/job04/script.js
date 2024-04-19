async function fetchUsersJSON() {
    const response = await fetch("utilisateur.json");
    const json = await response.json();

    return json;
}

async function loadTable() {
    const users = await fetchUsersJSON();

    $("table").empty()
    $("table").append(`
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>E-mail</th>
        </tr>
    `);

    for (let i = 0; i < users.length; i++) {
        $("table").append(`
            <tr>
                <th>${users[i].id}</th>
                <th>${users[i].last_name}</th>
                <th>${users[i].first_name}</th>
                <th>${users[i].email}</th>
            </tr>
        `);
    };
}

function bindUpdateButton() {
    $("button").on("click", function() {
        loadTable();
    });
}


$(document).ready(function() {
    bindUpdateButton()
    loadTable();
});