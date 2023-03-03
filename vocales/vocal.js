function esVocal(cadena) {
    cadena = cadena.toLowerCase();

    switch (cadena) {
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
            break;
    }
}

module.exports = {
    esVocal:esVocal
}