import { faker } from "@faker-js/faker";

const randomLibro = () => {
    const libro = {
        codigo: faker.string.alpha(6),
        autor: faker.book.author(),
        titulo: faker.book.title(),
    }
    return libro
}

export default {
    randomLibro
}

