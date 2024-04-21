//obetener los datos de otro lugar (animales.json)

let animales = () => {
    const url = "";

    const getDatos = async () => {
        let respuesta = await fetch(url);;
        let { animales } = await respuesta.json()

        return animales;
    }

    return { getDatos };
}