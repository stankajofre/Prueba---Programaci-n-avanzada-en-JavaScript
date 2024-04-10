import Animal from `./Animal.js`
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
        //reproducir sonido del leon 
    }
}
class lobo extends Animal {class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
        //reproducir sonido del leon 
    }
}
class lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Aullar() {
        //reproducir sonido del lobo
    }
}
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Gruñir() {
        //reproducir sonido del Oso 
    }
}
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Sisear() {
        //reproducir sonido del Serpiente 
    }
}
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Chillar() {
        //reproducir sonido del Aguila 
    }
}
export { Leon, lobo, Oso, Serpiente, Aguila };