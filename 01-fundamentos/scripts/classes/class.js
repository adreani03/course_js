class Persona {
    static _conteo = 0;

    nombre = '';
    codigo = '';
    frase = '';
    _commida = '';

    constructor(nombre = 'Sin nombre', codigo = 'sin codigo', frase = 'sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComida(comida) {
        this._commida = comida.toUpperCase();
    }

    get getComida() {
        return this._commida;
    }

    quienSoy() {
        console.log(`soy ${this.nombre} y me llaman ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo}, dice: ${this.frase}`);
    }

    static getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        return 'Soy un static method';
    }
}

const ironman = new Persona('tony', 'ironman', 'hola');

console.log(ironman);

ironman.nombre = 'david';

ironman.setComida = 'no tiene';
console.log(ironman.getComida);

console.log(Persona.mensaje());

Persona.propiedadExterna = 'Hola mundo'; //ESTO NO SE DEBE HACER
console.log(Persona.propiedadExterna);
