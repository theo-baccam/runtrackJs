function nombreEstPremier(nombre) {
    if (nombre < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}


function sommeNombresPremiers(nombre1, nombre2) {
    if (nombreEstPremier(nombre1) && nombreEstPremier(nombre2)) {
        return nombre1 + nombre2;
    }

    return false;
}