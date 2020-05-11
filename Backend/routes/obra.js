const express = require("express");
const router = express.Router();
const { validarObra,
    guardarObra,
    consultarObra,eliminarObra,editarObra } = require("../controllers/obra");



router.get("/obra", async (req, res) => {
    let info_obras = await req.body;
    consultarObra()
        .then(obraDB => {
            let obra = obraDB.rows;
            res.send({ ok: true, info: obra, mensaje: "Obras consultadas" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/obra", (req, res) => {
    try {
        let info_obra = req.body;

        validarObra(info_obra);

        guardarObra(info_obra)
            .then(respuestaDB => {
                console.log("entro");
                
                res.send({ ok: true, mensaje: "Obra guardada", info: info_obra });
            })
            .catch(error => {
                console.log(error);
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});


//Eliminar


router.delete("/obra/:id", (req, res) => {
    let id = req.params.id;
    eliminarObra(id)
      .then((respuestaDB) => {
        console.log("LOLO")
        res.send({ ok: true,  mensaje: "Obra eliminada", info: {id} });
      })
      .catch((error) => {
        console.log(error)
        res.send(error);
      });
  });
  
  //Actualizar

 
router.put("/obra/:id", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let id = req.params.id;
      let info_obra = req.body;
  
      // Actualiza el usuario en base de datos
      editarObra(info_obra, id)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Obra editada", info: info_obra });
        })
        .catch(error => {
          res.send(error);
        });
  
      // Responder
    } catch (error) {
      res.send(error);
    }
    
  });


//Exportación del router

module.exports = router;