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
    else if (!seguimiento.fecha_evaluacion) {
        throw {
            ok: false,
            mensaje: "La fecha del seguimiento "
        };
    } else if (!seguimiento.concepto) {
        throw {
            ok: false,
            mensaje: "El concepto del seguimiento"
        };
    } else if (!seguimiento.comentarios) {
        throw {
            ok: false,
            mensaje: "El comentario del seguimiento"
        };

    }
};


let guardarSeguimiento = async (seguimiento) => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.pu_registros_evaluaciones (
        id, id_tarea, fecha_evaluacion, concepto, comentarios) 
            VALUES ($1,$2,$3,$4,$5);`;
    let valores = [seguimiento.id, seguimiento.id_tarea, seguimiento.fecha_evaluacion,
    seguimiento.concepto, seguimiento.comentarios]
    let respuesta = await _servicio.ejecutarSql(sql, valores);
    return respuesta;
};

let consultarSeguimientos = async () => {
    let _servicio = new ServicioPg();
    let sql = `SELECT pu_registros_evaluaciones.id, pu_tareas.nombre AS Tarea, fecha_evaluacion, comentarios, concepto
    FROM public.pu_registros_evaluaciones 
    INNER JOIN pu_tareas ON pu_registros_evaluaciones.id_tarea = pu_tareas.id;`
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarSeguimiento = async (id) => {
    let _servicio = new ServicioPg();
    let sql = `SELECT id, id_tarea, fecha_evaluacion, comentarios, concepto
	            FROM public.pu_registros_evaluaciones WHERE pu_registros_evaluaciones.id = $1;`;
    let respuesta = await _servicio.ejecutarSql(sql, [id]);
    return respuesta;
};

let eliminarSeguimiento = async (id) => {
    let _servicio = new ServicioPg();
    console.log(id)
    let sql = `DELETE FROM public.pu_registros_evaluaciones WHERE id=$1;`;
    let respuesta = await _servicio.ejecutarSql(sql, [id]);
    return respuesta;
};

let editarSeguimiento = async (seguimiento, id) => {
    if (seguimiento.id != id) {
        throw {
            ok: false,
            mensaje: "el id del seguimiento no corresponde al enviado",
        };
    }
    let _servicio = new ServicioPg();

    let sql = 'UPDATE public.pu_registros_evaluaciones set id_tarea =$1,'
        + 'fecha_evaluacion =$2, concepto =$3, cometarios =$4 WHERE id = $5;';
    let valores = [seguimiento.id_tarea, seguimiento.fecha_evaluacion, seguimiento.concepto, seguimiento.comentarios, id]
    let respuesta = await _servicio.ejecutarSql(sql, valores);

    return respuesta;
};


// exportar los metodos para ser usados en otros archivos

module.exports = { validarSeguimiento, guardarSeguimiento, consultarSeguimiento, consultarSeguimientos, eliminarSeguimiento, editarSeguimiento };