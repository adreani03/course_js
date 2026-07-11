import _ from "underscore";


/**
 * Esta funcion crea un neuevo deck 
 * @param {Array<String>} tiposDeCarta ejemplo: [2,3,4,5,6] 
 * @param {Array<String>} tiposEspeciales ejemplo: [J, Q, K, A]
 * @returns {Array} - retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('Tipo de carta es obligatorio como un arreglo de strings');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
