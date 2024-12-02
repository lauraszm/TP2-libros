import generator from "../utils/generator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080")


describe('Test de libros: ', () => {
    const data = generator.randomLibro()

    it('GET Users - admin', async () => {
        const response = await urlBase.get("/libros/allLibros")
        expect(response.status).to.equal(200)
    })

    it('POST Users ', async () => {
        const response = await urlBase.post("/libros/newLibro").send(data)
        expect(response.status).to.equal(200)
    })

})