import express, { urlencoded } from 'express'
import config from './config.js'
import LibrosRouter from './routes/libros.router.js'

const app = express()
const PORT = config.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/libros", new LibrosRouter().start())

app.listen(PORT, () =>
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
);

app.on("Error", (err) =>
    console.error("Hubo un problema con el servidor", err)
);