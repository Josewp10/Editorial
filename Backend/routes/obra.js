const express = require("express");
const router = express.Router();




const _controlador = require("../controllers/obra");



router.get("/obra", async (req, res) => {
    let info_obra = await req.body;
    _controlador
        .consultar(info_obra)
        .then((obraDB) => {
            let obra = obraDB.rows;
            res.send({ ok: true, info: obra, mensaje: "Obras consultadas" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/obra", async (req, res) => {

    try {
        let info = await req.body;
        _controlador.validar(info);
        _controlador
            .guardar(info)
            .then((obraDB) => {
                res.send({ ok: true, mensaje: "Obra registrada correctamente", info: info });
            })
            .catch((error) => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});


   //Eliminar
   
   router.delete("/obra", async (req, res) => {
    let info_obra = await req.body;
    _controlador
      .eliminar(info_obra)
      .then((obraDB) => {
        let reg = obraDB;
        res.send({ ok: true, info: reg, mensaje: "Obra eliminada" });
      })
      .catch((error) => {
        res.send(error);
      });
  
  });

//Exportación del router

module.exports = router;