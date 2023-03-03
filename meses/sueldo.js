function sueldoD( sueldoNeto ) {
    let sueldoMensual = sueldoNeto * 30;
    sueldoMensual = sueldoMensual * 0.84;
    return sueldoMensual;
}

module.exports = {
    sueldoD:sueldoD 
}