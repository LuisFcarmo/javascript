function cria_multiplicador (multiplicador) {
    return function (n){ return multiplicador* n};
}

const duplica = cria_multiplicador(2);
console.log(duplica(10));