function bisextile(annee) {
    if (annee % 100 === 0) {
        return annee % 400 === 0;
    }
    return annee % 4 === 0;
}

console.log(bisextile(2004)) // true
console.log(bisextile(2003)) // false
console.log(bisextile(2000)) // true
console.log(bisextile(1900)) // false