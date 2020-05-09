const express = require("express");
const router = express.Router();
const { validarTarea,
    guardarTarea,
    consultarTareas, } = require("../controllers/tareas");



router.get("/tareas", async (req, res) => {
    let info_tareas = await req.body;
    consultarTareas(info_tareas)
        .then(tareasDB => {
            let tareas = tareasDB.rows;
            res.send({ ok: true, info: tareas, mensaje: "Tareas consultadas" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/tareas", (req, res) => {
    console.log("entro al try");
    try {
        let info_tarea = req.body;
        console.log(info_tarea);

        validarTarea(info_tarea);
        console.log("valido la info");

        guardarTarea(info_tarea)
            .then(respuestaDB => {
                console.log("entro");
                
                res.send({ ok: true, mensaje: "Tarea guardada", info: info_tarea });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});


//Eliminar

router.delete("/tareas", async (req, res) => {
    let info_tareas = await req.body;
    _controlador
        .eliminar(info_tareas)
        .then((tareasDB) => {
            let reg = tareasDB;
            res.send({ ok: true, info: reg, mensaje: "Tarea Eliminada" });
        })
        .catch((error) => {
            res.send(error);
        });

});

//Exportación del router

module.exports = router;