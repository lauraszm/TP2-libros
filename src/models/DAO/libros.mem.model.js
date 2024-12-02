class LibrosMemModel{
    constructor(){
        this.libros = [
            {
                codigo: "ABC123",
                titulo: "Frankestein",
                autor: "Mary Shelley",
                estado: "Alquilado"
            },
            {
                codigo: "ABC124",
                titulo: "Cometierra",
                autor: "Dolores Reyes",
                estado: "Disponible"
            }
        ]
        this.allLibrosPorEstado = {
            disponibles: [],
            alquilados: [],
            noAptos: []
        }
    }

    addNewLibro = async(libro) => {
        const existeCodigo = this.libros.find(l => l.codigo == libro.codigo)
        if (existeCodigo == null){
            libro.estado = "Disponible"
            await this.libros.push(libro)
            return libro
        } else {
            return `Codigo ${libro.codigo} existente`
        }
    }

    alquilarLibro = async(codigo) => {
        const allLibros = await this.getAllLibros()
        const libro = allLibros.find(l => l.codigo == codigo)
        if(libro != null && libro.estado.toLocaleLowerCase() == 'disponible'){
            libro.estado = "Alquilado"
            return libro
        } else {
            return `El libro ${libro.titulo} no puede ser prestado porque su estado es ${libro.estado}`
        }
    }

    devolverLibro = async(codigo) => {
        const allLibros = await this.getAllLibros()
        const libro = allLibros.find(l => l.codigo == codigo)
        if(libro != null && libro.estado.toLocaleLowerCase() == 'alquilado'){
            libro.estado = "Disponible"
            return libro
        } else {
            return `El libro ${libro.titulo} no estaba alquilado`
        }
    }

    marcarLibroDanado = async(codigo) => {
        const allLibros = await this.getAllLibros()
        const libro = allLibros.find(l => l.codigo == codigo)
        if(libro != null && libro.estado.toLocaleLowerCase() != 'no-apto'){
            libro.estado = "no-apto"
            return libro
        } else {
            return `El libro ${libro.titulo} ya estaba marcado como no-apto`
        }    
    }

    getAllLibros = async() => {
        return await this.libros
    }

    getLibrosPorEstado = async(estado) => {
        const librosPorEstado = await this.libros.filter(l => l.estado.toLowerCase() == estado.toLowerCase())
        return librosPorEstado
    }

    getAllLibrosPorEstado = async() => {
        const allLibros = await this.getAllLibros()
        const librosAlquilados = allLibros.filter(l => l.estado.toLowerCase() == "alquilado")
        const librosDisponibles = allLibros.filter(l => l.estado.toLowerCase() == 'disponible')
        const librosNoAptos = allLibros.filter(l => l.estado.toLowerCase() == 'no-apto')
        
        this.allLibrosPorEstado.disponibles = librosDisponibles
        this.allLibrosPorEstado.alquilados = librosAlquilados
        this.allLibrosPorEstado.noAptos = librosNoAptos
        return this.allLibrosPorEstado
    }

    borrarLibro = async(codigo) => {
        const allLibros = this.libros
        const index = allLibros.findIndex(l => l.codigo == codigo)
        if(index > -1){
            this.libros[index].estado = "borrado"
            const libroABorrar = this.libros.splice(index,1)
            return libroABorrar
        } else {
            return `No existe libro con codigo ${codigo}`
        }
    }
}

export default LibrosMemModel