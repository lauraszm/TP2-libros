import Factory from '../models/Factory.js'
import config from '../config.js'
import { validateLibro } from '../validate/schema.js'
import SorteoService from './sorteo.service.js'

class LibrosService{
    constructor(){
        this.model = Factory.get(config.PERSISTENCE)
        this.sorteo = new SorteoService()
    }

    addNewLibro = async(libro) => {
        const validate = validateLibro(libro)
        const newLibro = validate.error ? validate.errorMessage : await this.model.addNewLibro(libro)
        return newLibro
    }

    alquilarLibro = async(codigo) => {
        const sorteoLibro = await this.sorteo.getSorteo()
        if(sorteoLibro.premio){
            await this.model.borrarLibro(codigo)
            return `Sorteo ganado, no debe devolver el libro solicitado`
        } else {
            return await this.model.alquilarLibro(codigo)
        }
    }

    devolverLibro = async(codigo) => {
        return await this.model.devolverLibro(codigo)
    }

    marcarLibroDanado = async(codigo) => {
        return await this.model.marcarLibroDanado(codigo)
    }

    getAllLibros = async() => {
        return await this.model.getAllLibros()
    }

    getLibrosPorEstado = async(estado) => {
        return await this.model.getLibrosPorEstado(estado)
    }

    getAllLibrosPorEstado = async() => {
       return await this.model.getAllLibrosPorEstado()
    }

    borrarLibro = async(codigo) => {
        return await this.model.borrarLibro(codigo)
    }
}   


export default LibrosService