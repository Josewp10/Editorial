const express = require("express");
const router = express.Router();
const { validarTarea,
    guardarTarea,
    consultarobra,eliminarTarea,editarTarea } = require("../controllers/obra");



router.get("/obra", async (req, res) => {
    let info_obras = await req.body;
    consultarobra(info_obras)
        .then(obraDB => {
            let obra = obraDB.rows;
            res.send({ ok: true, info: obra, mensaje: "obra consultadas" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/obra", (req, res) => {
    try {
        let info_obra = req.body;

        validarTarea(info_obra);

        guardarTarea(info_obra)
            .then(respuestaDB => {
                console.log("entro");
                
                res.send({ ok: true, mensaje: "Tarea guardada", info: info_obra });
            })
            .catch(error => {
                res.send(error);
            });
    } catch (error) {
        res.send(error);
    }

});


//Eliminar


router.delete("/obra/:id", (req, res) => {
    let id = req.params.id;
    eliminarTarea(id)
      .then((respuestaDB) => {
        console.log("LOLO")
        res.send({ ok: true,  mensaje: "Tarea eliminada", info: {id} });
      })
      .catch((error) => {
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
      editarTarea(info_obra, id)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Tarea editada", info: info_obra });
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