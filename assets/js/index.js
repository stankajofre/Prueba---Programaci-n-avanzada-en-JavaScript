import { Leon, Lobo, Oso, Serpiente, Aguila } from `./TiposDeAnimales.js`;
import animales from `./Animales.js`

let imagenDelAnimal;
let sonidoDelAnimal;
let listaDeAnimales = [];
let animal;
//2. Crear las instancias de las clases utilizando los datos del formulario.revisar desde hora 16.30

document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const elementoHTMLDelNombre = document.getElementById("animal");
    const elementoHTMLDeLaEdad = document.getElementById("edad")
    const elementoHTMLDeLosComentarios = document.getElementById("comentarios")
    const elementoPreview = document.getElementById("preview");


    const nombreDelAnimal = elementoHTMLDelNombre.value
    const edadDelAnimal = elementoHTMLDeLaEdad.value
    const comentariosDelAnimal = elementoHTMLDeLosComentarios.value

    const datosDelArchivoJSON = await animales.getDatos();

    const objetoDelAnimal = datosDelArchivoJSON.find((objeto) => {

        return objeto.name == nombreDelAnimal
    })


    imagenDelAnimal = `../imgs/${objetoDelAnimal.imagen}`
    sonidoDelAnimal = objetoDelAnimal.sonido;
    elementoPreview.style.backgroundImage = `url(${imagenDelAnimal})`

    if (nombreDelAnimal && edadDelAnimal && comentariosDelAnimal) {
        switch (nombreDelAnimal) {
            //se hace un case con cada animal se copia hasta el break 
            case "Leon":
                console.log("Creare un Leon")
                animal = new Leon(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;

            case "Lobo":
                console.log("Creare un Leon")
                animal = new Lobo(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
            case "Oso":
                console.log("Creare un Leon")
                animal = new Oso(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
            case "Serpiente":
                console.log("Creare un Leon")
                animal = new Serpiente(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
            case "Aguila":
                console.log("Creare un Leon")
                animal = new Aguila(nombreDelAnimal, edadDelAnimal, img, comentariosDelAnimal, sonido)
                break;

            default:
                console.log("Debes elegir un animal")
                break;
        }

        listaDeAnimales.push(animal)

        elementoHTMLDelNombre.selectedIndex = 0;
        elementoHTMLDeLaEdad.selectedIndex = 0;
        elementoHTMLDeLosComentarios.value "";

    }

})
