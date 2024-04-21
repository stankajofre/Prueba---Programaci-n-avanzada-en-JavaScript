import Animal from `./Animal.js`

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
        //reproducir sonido del leon 
    }
}
class Lobo extends Animal {
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
    Grunir() {
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
export { Leon, Lobo, Oso, Serpiente, Aguila };