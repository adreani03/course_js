class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}


const nombre1 = 'Melissa'
    apellido1 = 'Flores',
    pais = 'Honduras';

const nombre2 = 'David'
    apellido1 = 'Adreani',
    pais = 'Suiza';


const david ={
    nombre : 'David',
    apellido: 'Adreani',
    pais: 'Venezela'
}


const persona1 = new Persona(nombre1, apellido1, pais);

const persona2 = Persona.porObjeto(david);
persona2.getInfo();