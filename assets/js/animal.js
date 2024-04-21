export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._this._edad;
    }
    get img() {
        return this._img;

    }
    get comentarios() {
        return this._comentarios;
    }
    get sonido() {
        return this._sonido;
    }
    set Comentarios(nuevoComentario) {
        this.Comentarios = nuevoComentario;
    }
// revissar carpeta pregunta 

let animales = () => {
    const url = "http://127.0.0.1:5501/animales.json";
    const getDatos = async (){
        let respuesta = await fetch(url);;
        let { animales } = await respuesta.json()
        return animales;
    }
    return { getDatos };
    ();
}
 