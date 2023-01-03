/* Importar las dependencias */
import express, { application } from "express";
import { getTime } from "./lib/utils"
import Persona from "./Persona"

/* Instanciamos nuestras constantes */
const p: Persona = new Persona("Coder", "House");
const app = express();

/* Funciones */
app.get("/", (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName(),
    })
})

/* Configuración del servidor */
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Conectado en el puerto: ", PORT)
});