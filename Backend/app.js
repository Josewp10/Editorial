//Importar express
const express = require('express')
const router = express.Router();
const cors = require('cors');
//Inicializar librería
const app = express()
app.use(express.json());
app.use(cors());

//Endpoint
app.get("/", (req, res)=>{
  res.send('Bienvenido al proyecto de gestión de tareas')
})

///Importarlas rutas
//const ruta_autenticacion= require("./routes/autenticacion")
//app.use(ruta_autenticacion);

const ruta_reporte = require("./routes/reportes")
app.use(ruta_reporte);

const ruta_obra = require("./routes/obra")
app.use(ruta_obra);

const ruta_seguimiento = require("./routes/seguimiento")
app.use(ruta_seguimiento);

const ruta_tareas = require("./routes/tareas")
app.use(ruta_tareas);

//Puerto
const port = 3001
//Levantamiento
app.listen(port,()=>{
  console.log(`Escuchando API en http://localhost:${port}`);
})