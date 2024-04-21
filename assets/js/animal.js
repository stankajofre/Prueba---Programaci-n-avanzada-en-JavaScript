export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre() {
        return this._nombre;
    }

    get Edad() {
        return this._this._edad;
    }
    get Img() {
        return this._img;

    }
    get Comentarios() {
        return this._comentarios;
    }
    get Sonido() {
        return this._sonido;
    }
    set Comentarios(nuevoComentario) {
        this._Comentarios = nuevoComentario;
    }
    

        let Animales = () => {
    const url = "http://127.0.0.1:5501/animales.json";
    const getDatos = async()
    let respuesta = await fetch(url);
    let { animales } = await respuesta.json()
    return animales;
}
return { getDatos };

