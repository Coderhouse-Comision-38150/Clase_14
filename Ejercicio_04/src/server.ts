/* Importamos dependencias */
import express from "express";
import Perimetro from "./lib/perimetro";
import Superficie from "./lib/superficie";

/* Instanciar nuestras constantes */
const app = express();

/* Calcular perimetros en la API */
app.get("/perimetro", (req, res) => {
  const { figura, lado1, lado2, lado, radio } = req.query;
  let resultado: number;

  if (figura === "cuadrado" && lado) {
    resultado = Perimetro.cuadrado(Number(lado));
  } else if (figura === "rectangulo" && lado1 && lado2) {
    resultado = Perimetro.rectangulo(Number(lado1), Number(lado2));
  } else if (figura === "circulo" && radio) {
    resultado = Perimetro.circulo(Number(radio));
  } else {
    return res.send("Parametro son invalidos");
  }

  res.json({
    calculo: "Perimetro",
    figura,
    resultado,
  });
});

/* Calcular la superficie */
app.get("/superficie", (req, res) => {
  const { figura, lado1, lado2, lado, radio } = req.query;
  let resultado: number;

  if (figura === "cuadrado" && lado) {
    resultado = Superficie.cuadrado(Number(lado));
  } else if (figura === "rectangulo" && lado1 && lado2) {
    resultado = Superficie.rectangulo(Number(lado1), Number(lado2));
  } else if (figura === "circulo" && radio) {
    resultado = Superficie.circulo(Number(radio));
  } else {
    return res.send("Parametro son invalidos");
  }

  res.json({
    calculo: "Superficie",
    figura,
    resultado,
  });
});

/* Configuración del servidor */
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Conectado en el puerto: ", PORT);
});
