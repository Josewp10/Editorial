const ServicioPg = require("../services/postgress");


// se valida la informacion 

let validarTarea = tareas => {

    if (!tareas) {
        throw {
            ok: false,
            mensaje: "El id de la tarea"
        };

    } else if (!tareas.nombre) {
        throw {
            ok: false,
            mensaje: "El nombre de la tarea "
        };
    } else if (!tareas.descripcion) {
        throw {
            ok: false,
            mensaje: "La descripcion de la tarea"
        };
    } 
};


let guardarTarea = async (tareas) => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.pu_tareas(
        id, nombre, descripcion, modulo) VALUES (
                    '${pu_tareas.id}',
                    '${pu_tareas.nombre}',
                    '${pu_tareas.descripcion}',
                    '${pu_tareas.modulo}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarTareas = async (tareas) => {
    let _servicio = new ServicioPg();
    let sql = `SELECT * FROM pu_tareas `;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


let eliminar = async (toDelete) => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM public.pu_tareas WHERE id = ${toDelete.id}`
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
}

// exportar los metodos para ser usados en otros archivos

module.exports = { validarTarea, guardarTarea, consultarTareas, eliminar };