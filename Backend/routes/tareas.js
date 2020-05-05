const express = require("express");
const router = express.Router();




const _controlador = require("../controllers/tareas");



router.get("/tareas", async (req, res) => {
    let info_tareas = await req.body;
    _controlador
        .consultar(info_tareas)
        .then((tareasDB) => {
            let tareas = tareasDB.rows;
            res.send({ ok: true, info: tareas, mensaje: "las tareas consultados" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/tareas", async (req, res) => {

    try {
        let info = await req.body;
        _controlador.validar(info);
        _controlador
            .guardar(info)
            .then((tareasDB) => {
                res.send({ ok: true, mensaje: "Registro ingresado guardado", info: info });
            })
            .catch((error) => {
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
        res.send({ ok: true, info: reg, mensaje: "registro eliminado" });
      })
      .catch((error) => {
        res.send(error);
      });
  
  });

//Exportación del router

module.exports = router;