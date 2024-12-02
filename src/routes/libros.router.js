import express from 'express'
import LibrosController from '../controllers/libros.controller.js'

class LibrosRouter{
    constructor(){
        this.router = new express.Router()
        this.controller = new LibrosController()
    }

    start(){
        this.router.post("/newLibro", this.controller.addNewLibro)
        this.router.patch("/alquilar/:codigo", this.controller.alquilarLibro)
        this.router.patch("/devolver/:codigo", this.controller.devolverLibro)
        this.router.patch("/marcarDanado/:codigo", this.controller.marcarLibroDanado)
        this.router.get("/allLibros", this.controller.getAllLibros)
        this.router.get("/librosPorEstado/:estado", this.controller.getLibrosPorEstado)
        this.router.get("/allLibrosPorEstado", this.controller.getAllLibrosPorEstado)
        this.router.delete("/borrar/:codigo", this.controller.borrarLibros)
        return this.router
    }
}

export default LibrosRouter