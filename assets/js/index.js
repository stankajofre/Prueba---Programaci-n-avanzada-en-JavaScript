import { Leon, Lobo, Oso, Serpiente, Aguila } from `./TiposDeAnimales.js`;
import animales from `./Animales.js`

//2. Crear las instancias de las clases utilizando los datos del formulario.revisar desde hora 16.30

document.getElementById("btnRegistrar").addEventListener("click", () => {
    const elementoHTMLDelNombre = document.getElementById("animal");
    const elementoHTMLDeLaEdad = document.getElementById("edad")
    const elementoHTMLDeLosComentarios = document.getElementById("comentarios")


    const nombreDelAnimal = elementoHTMLDelNombre.value
    const edadDelAnimal = elementoHTMLDeLaEdad.value
    const comentariosDelAnimal = elementoHTMLDeLosComentarios.value


    if (nombreDelAnimal && edadDelAnimal && comentariosDelAnimal) {
        switch (nombreDelAnimal) {
            //se hace un case con cada animal se copia hasta el break 
            case "Leon":
                console.log("Creare un Leon")
                let animal = new Leon(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;

            case "Lobo":
                console.log("Creare un Leon")
                let animal = new Lobo(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
            case "Oso":
                console.log("Creare un Leon")
                let animal = new Oso(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
            case "Serpiente":
                console.log("Creare un Leon")
                let animal = new Serpiente(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
            case "Aguila":
                console.log("Creare un Leon")
                let animal = new Aguila(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
        }
        elementoHTMLDelNombre.selectedIndex = 0;
        elementoHTMLDeLaEdad.selectedIndex = 0;
        elementoHTMLDeLosComentarios.value "";


    } else {
        alert
    }

})