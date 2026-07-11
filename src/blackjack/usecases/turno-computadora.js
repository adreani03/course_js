import { pedirCarta, valorCarta, creatCartaHTML } from "./";

/**
 * 
 * @param {Numbre} puntosMinimos puntos minimos para que gane la pc 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar puntos
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck  
 */

// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('PArgumento HTML es necesario');
    if (!divCartasComputadora) throw new Error('PArgumento HTML es necesario');
    if (!deck) throw new Error('Deck es necesario');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = creatCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
