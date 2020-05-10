const express = require("express");
const router = express.Router();
const {validarSeguimiento,
    guardarSeguimiento,
    consultarSeguimiento,
    eliminarSeguimiento,
    editarSeguimiento } = require("../controllers/seguimiento");



router.get("/seguimiento", async (req, res) => {
    let info_seguimiento = await req.body;
    consultarSeguimiento(info_seguimiento)
        .then(seguimientoDB => {
            let seguimiento = seguimientoDB.rows;
            res.send({ ok: true, info: seguimiento, mensaje: "Seguimientos consultados" });
        })
        .catch((error) => {
            res.send(error);
        });
});

//Guardamos 

router.post("/seguimiento", (req, res) => {
  try {
      let info_seguimiento = req.body;

      validarSeguimiento(info_seguimiento);

      guardarSeguimiento(info_seguimiento)
          .then(respuestaDB => {
              console.log("entro");
              
              res.send({ ok: true, mensaje: "Tarea guardada", info: info_seguimiento });
          })
          .catch(error => {
              res.send(error);
          });
  } catch (error) {
      res.send(error);
  }

});


//Eliminar


router.delete("/seguimiento/:id", (req, res) => {
    let id = req.params.id;
    eliminarSeguimiento(id)
      .then((respuestaDB) => {
        console.log("LOLO")
        res.send({ ok: true,  mensaje: "Seguimiento eliminado", info: {id} });
      })
      .catch((error) => {
        res.send(error);
      });
  });
  
  //Actualizar

 
  router.put("/seguimiento/:id", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let id = req.params.id;
      let info_seguimiento = req.body;
  
      // Actualiza el usuario en base de datos
      editarSeguimiento(info_seguimiento, id)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "seguimiento editada", info: info_seguimiento });
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