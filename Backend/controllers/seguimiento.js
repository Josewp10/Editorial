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
    } else if (!seguimiento.estado) {
        throw {
            ok: false,
            mensaje: "El estado del seguimiento"
        };
    } 
};


let guardarSeguimiento = async (pu_seguimientos_propuestas) => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.pu_seguimientos_propuestas(
        id, id_tarea, fecha, comentario, estado, archivo) VALUES (
                    '${pu_seguimientos_propuestas.id}',
                    '${pu_seguimientos_propuestas.id_tarea}',
                    '${pu_seguimientos_propuestas.fecha}',
                    '${pu_seguimientos_propuestas.comentario}',
                    '${pu_seguimientos_propuestas.estado}'
                    '${pu_seguimientos_propuestas.archivo}');`;
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
  

  let editarSeguimiento = async (pu_seguimientos_propuestas, id) => {
    if(pu_seguimientos_propuestas.id != id){
        throw {
            ok: false,
            mensaje: "el id de la seguimiento no corresponde al enviado",   
        };
    }
    console.log("NOOOO")
    let _servicio = new ServicioPg();
    let sql = 'UPDATE public.pu_seguimientos_propuestas set nombre =$1,'
    +'descripcion =$2, modulo =$3 WHERE id = $4;';
    let valores = [pu_seguimientos_propuestas.nombre, pu_seguimientos_propuestas.descripcion, pu_seguimientos_propuestas.modulo, id]
    let respuesta = await _servicio.ejecutarSql(sql, valores);
    
    return respuesta;
};


// exportar los metodos para ser usados en otros archivos

module.exports = { validarSeguimiento, guardarSeguimiento, consultarSeguimiento, eliminarSeguimiento,editarSeguimiento };