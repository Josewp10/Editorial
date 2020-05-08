const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/tareas");



router.get("/tareas", async (req, res) => {
    let info_tareas = await req.body;
    _controlador
        .consultar(info_tareas)
        .then(tareasDB => {
            let tareas = tareasDB.rows;
            res.send({ ok: true, info: tareas, mensaje: "Tareas consultadas" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/tareas", async (req, res) => {
    console.log("que cuca parce");
    
    try {
        let info_tarea = await req.body;
        console.log("ey pana");
        
        _controlador.validar(info_tarea);
        console.log("vamo a ganar");
        
        _controlador
            .guardar(info_tarea)
            .then(respuestaDB => {
                res.send({ ok: true, mensaje: "Tarea Registrada exitosamente", info: info_tarea });
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