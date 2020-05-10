const ServicioPg = require("../services/postgress");


// se valida la informacion 

let validarSeguimiento = seguimiento => {

    if (!seguimiento) {
        throw {
            ok: false,
            mensaje: "El id del seguimiento"
        };

  } else if (!seguimiento.id_tarea) {
        throw {
            ok: false,
            mensaje: "El id de la tarea"
        };
    } 
    else if (!seguimiento.fecha) {
        throw {
            ok: false,
            mensaje: "La fecha del seguimiento "
        };
    } else if (!seguimiento.comentario) {
        throw {
            ok: false,
            mensaje: "El comentario del seguimiento"
        };
    } else if (!pu_seguimiento_propuestas.estado) {
        throw {
            ok: false,
            mensaje: "El estado del seguimiento"
        };
        
    }else if (!seguimiento.archivo) {
        throw {
            ok: false,
            mensaje: "El archivo del seguimiento"
        };
        
    }else if (!seguimiento.id_propuesta) {
        throw {
            ok: false,
            mensaje: "la propuesta del seguimiento"
        };
        
    }
    
};


let guardarSeguimiento = async (pu_seguimientos_propuestas) => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.pu_seguimientos_propuestas (
        id, id_tarea, fecha, comentario, estado, archivo, id_propuesta) VALUES (
                    '${pu_seguimientos_propuestas.id}',
                    '${pu_seguimientos_propuestas.id_tarea}',
                    '${pu_seguimientos_propuestas.fecha}',
                    '${pu_seguimientos_propuestas.comentario}',
                    '${pu_seguimientos_propuestas.estado}',
                    '${pu_seguimientos_propuestas.archivo}',
                    '${pu_seguimientos_propuestas.id_propuesta}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarSeguimiento = async (pu_seguimientos_propuestas) => {
    let _servicio = new ServicioPg();
    let sql = `SELECT id, id_tarea, fecha, comentario, estado, archivo
	            FROM public.pu_seguimientos_propuestas;`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


let eliminarSeguimiento = async (id) => {
    let _servicio = new ServicioPg();
    console.log(id)
    let sql = `DELETE FROM public.pu_seguimientos_propuestas WHERE id=$1;`;
    let respuesta = await _servicio.ejecutarSql(sql, [id]);
    return respuesta;
  };
  

 
  let editarSeguimiento = async (seguimiento, id) => {
    if(seguimiento.id != id){
        throw {
            ok: false,
            mensaje: "el id de la tarea no corresponde al enviado",   
        };
    }
    let _servicio = new ServicioPg();
   
    let sql = 'UPDATE public.pu_seguimientos_propuestas set id_tarea =$1,'
    +'fecha =$2, comentario =$3, estado =$4, archivo =$5, id_propuesta =$6 WHERE id = $7;';
    let valores = [seguimiento.id_tarea, seguimiento.fecha, seguimiento.comentario, seguimiento.estado, seguimiento.archivo, seguimiento.id_propuesta, id]
    let respuesta = await _servicio.ejecutarSql(sql, valores);
    
    return respuesta;
};


// exportar los metodos para ser usados en otros archivos

module.exports = { validarSeguimiento, guardarSeguimiento, consultarSeguimiento, eliminarSeguimiento,editarSeguimiento};