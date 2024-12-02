class SorteoService{
    constructor(){}

    getSorteo =  async() =>{
        const resultado = await fetch('https://libros.deno.dev/premios')
        return resultado.json()
    }

}

export default SorteoService