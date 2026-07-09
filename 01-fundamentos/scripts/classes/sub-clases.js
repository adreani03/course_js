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



class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}




const ironman = new Heroe('tony', 'ironman', 'hola');

console.log(ironman);

ironman.quienSoy();