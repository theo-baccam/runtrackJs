function afficherJoursSemaines() {
    const JOURS = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
    ];

    for (let i = 0; i < JOURS.length; i++) {
        console.log(JOURS[i]);
    }
}

afficherJoursSemaines()