import LibrosService from "../services/libros.service.js";

class LibrosController{
    constructor(){
        this.service = new LibrosService()
    }

    addNewLibro = async(req,res) => {
        const newLibro = req.body
        const addLibro = await this.service.addNewLibro(newLibro)
        res.status(200).send(addLibro)
    }

    alquilarLibro = async(req,res) => {
        const { codigo } = req.params
        if (codigo == null){
            res.status(400).send("Falta el codigo del libro a alquilar")
        } else {
            const libroAlquilado = await this.service.alquilarLibro(codigo)
            res.status(200).send(libroAlquilado)
        }
    }

    devolverLibro = async(req,res) => {
        const { codigo } = req.params
        if(codigo == null) {
            res.status(400).send("Falta el codigo del libro a devolver")
        } else {
            const libroADevolver = await this.service.devolverLibro(codigo)
            res.status(200).send(libroADevolver)
        }
    }

    marcarLibroDanado = async(req,res) => {
        const { codigo } = req.params
        if (codigo == null){
            res.status(400).send("Falta el codigo del libro a modificar")
        } else {
            const libroDanado = await this.service.marcarLibroDanado(codigo)
            res.status(200).send(libroDanado)
        }    
    }

    getAllLibros = async(req,res) => {
        const allLibros = await this.service.getAllLibros()
        res.status(200).send(allLibros)
    }

    getLibrosPorEstado = async(req,res) => {
        const { estado } = req.params
        if(estado == null){
            res.status(400).send("Falta el estado a buscar")
        } else {
            const librosPorEstado = await this.service.getLibrosPorEstado(estado)
            res.status(200).send(librosPorEstado)
        }
    }

    getAllLibrosPorEstado = async(req,res) => {
        const allLibrosPorEstado = await this.service.getAllLibrosPorEstado()
        res.status(200).send(allLibrosPorEstado)
    }

    borrarLibros = async(req,res) => {
        const { codigo } = req.params
        if (codigo == null){
            res.status(400).send("Falta el codigo del libro a borrar")
        } else {
            const libroBorrado = await this.service.borrarLibro(codigo)
            res.status(200).send(libroBorrado)
        }  
    }
}

export default LibrosController