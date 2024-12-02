import LibrosMemModel from "./DAO/libros.mem.model.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new LibrosMemModel()
        
            default:
                console.log("Persistiendo en la memoria del servidor - OPCION DEFAULT")
                return new LibrosMemModel();
        }
    }
}

export default Factory