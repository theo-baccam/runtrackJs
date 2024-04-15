function jourTravaille(date) {
    const JOURS_FERIES = [
        new Date(2024, 0, 1),
        new Date(2024, 3, 1),
        new Date(2024, 4, 1),
        new Date(2024, 4, 8),
        new Date(2024, 4, 9),
        new Date(2024, 4, 20),
        new Date(2024, 6, 14),
        new Date(2024, 7, 15),
        new Date(2024, 10, 1),
        new Date(2024, 10, 11),
        new Date(2024, 10, 25),
    ]

    const JOURS_SEMAINE = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
    ]
    const MOIS = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    let annee = date.getFullYear();
    let numeroMois = date.getMonth();
    let numeroJour = date.getDate();
    let numeroJourSemaine = date.getDay();
    let millisecondes = date.getTime();

    for (let i = 0; i < JOURS_FERIES.length; i++) {
        if (JOURS_FERIES[i].getTime() === millisecondes) {
            console.log(
                `Le ${JOURS_SEMAINE[numeroJourSemaine]} ${numeroJour}`,
                `${MOIS[numeroMois]} ${annee} est un jour férié`
            );
            return;
        }
    }
    if (numeroJourSemaine === 6 || numeroJourSemaine === 0) {
        console.log(
            `Non, le ${JOURS_SEMAINE[numeroJourSemaine]} ${numeroJour}`,
            `${MOIS[numeroMois]} ${annee} est un week-end`
        );
        return;
    } else {
        console.log(
            `Oui, ${JOURS_SEMAINE[numeroJourSemaine]} ${numeroJour}`,
            `${MOIS[numeroMois]} ${annee} est un jour travaillé`
        );
        return;
    }
}

jourTravaille(new Date(2024, 0, 1))
jourTravaille(new Date(2024, 3, 15))
jourTravaille(new Date(2024, 3, 20))