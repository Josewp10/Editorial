const express = require("express");
const router = express.Router();




const _controlador = require("../controllers/seguimiento");



router.get("/seguimiento", async (req, res) => {
    let info_seguimiento = await req.body;
    _controlador
        .consultar(info_seguimiento)
        .then((seguimientoDB) => {
            let seguimiento = seguimientoDB.rows;
            res.send({ ok: true, info: seguimiento, mensaje: "Seguimientos consultados" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/seguimiento", async (req, res) => {

    try {
        let info = await req.body;
        _controlador.validar(info);
        _controlador
            .guardar(info)
            .then((seguimientoDB) => {
                res.send({ ok: true, mensaje: "Seguimiento registrado correctamente", info: info });
            })
            .catch((error) => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});


   //Eliminar
   
   router.delete("/seguimiento", async (req, res) => {
    let info_seguimiento = await req.body;
    _controlador
      .eliminar(info_seguimiento)
      .then((seguimientoDB) => {
        let reg = seguimientoDB;
        res.send({ ok: true, info: reg, mensaje: "Seguimiento eliminado correctamente" });
      })
      .catch((error) => {
        res.send(error);
      });
  
  });

//Exportación del router

module.exports = router;