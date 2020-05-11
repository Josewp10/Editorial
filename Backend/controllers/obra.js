const ServicioPg = require("../services/postgress");


// se valida la informacion 

let validarObra = obra => {

    if (!obra) {
        throw {
            ok: false,
            mensaje: "Ingresar información de la obra"
        };
    }
        else if (!obra.id) {
            throw {
                ok: false,
                mensaje: "Ingresar el id de la Obra"
            };
        } else if (!obra.titulo) {
        throw {
            ok: false,
            mensaje: "Ingresar el titulo de la Obra "
        };
    } else if (!obra.facultad) {
        throw {
            ok: false,
            mensaje: "Ingresar la facultad de la Obra"
        };
    }else if (!obra.tipo_publicacion) {
        throw {
            ok: false,
            mensaje: "Ingresar el tipo de publicación de la Obra"
        };
    } else if (!obra.area) {
        throw {
            ok: false,
            mensaje: "Ingresar el area de la Obra"
        };
    } else if (!obra.resumen) {
        throw {
            ok: false,
            mensaje: "Ingresar el resumen de la Obra"
        };
    } 
};


let guardarObra = async (pu_propuestas_publicaciones) => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.pu_propuestas_publicaciones(
        titulo, facultad, tipo_publicacion, area, resenia_autores, resumen,
        aspectos_novedosos, contribucion_area, publico_objetivo, datos_proyecto_asociado,
        forma_ajusta_mision_udem, observaciones_finales, id)
        VALUES (
                    '${pu_propuestas_publicaciones.titulo}','${pu_propuestas_publicaciones.facultad}',
                    '${pu_propuestas_publicaciones.tipo_publicacion}','${pu_propuestas_publicaciones.area}',
                    '${pu_propuestas_publicaciones.resenia_autores}','${pu_propuestas_publicaciones.resumen}',
                    '${pu_propuestas_publicaciones.aspectos_novedosos}','${pu_propuestas_publicaciones.contribucion_area}',
                    '${pu_propuestas_publicaciones.publico_objetivo}','${pu_propuestas_publicaciones.datos_proyecto_asociado}',
                    '${pu_propuestas_publicaciones.forma_ajusta_mision_udem}','${pu_propuestas_publicaciones.observaciones_finales}',
                    '${pu_propuestas_publicaciones.id}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarObra = async () => {
    let _servicio = new ServicioPg();
    let sql = `SELECT * FROM public.pu_propuestas_publicaciones`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


let eliminarObra = async (id) => {
    let _servicio = new ServicioPg();
    console.log(id)
    let sql = `DELETE FROM public.pu_propuestas_publicaciones WHERE id=$1;`;
    let respuesta = await _servicio.ejecutarSql(sql, [id]);
    return respuesta;
  };
  

  let editarObra = async (obra, id) => {
    if(obra.id != id){
        throw {
            ok: false,
            mensaje: "El id de la obra no corresponde al enviado",   
        };
    }
    console.log("NOOOO")
    let _servicio = new ServicioPg();
    
    let sql = 'UPDATE public.pu_propuestas_publicaciones'
            +'SET titulo=$1, facultad=$2, tipo_publicacion=$3,'
            +' area=$4, resenia_autores=$5, resumen=$6, aspectos_novedosos=$7,'
            +' contribucion_area=$8, publico_objetivo=$9, datos_proyecto_asociado=$10,' 
            +'forma_ajusta_mision_udem=$11, observaciones_finales=$12'
	        +'WHERE id=$13;';
    let valores = [obra.titulo, obra.facultad, obra.tipo_publicacion,
                obra.area,obra.resenia_autores,obra.resumen,obra.aspectos_novedosos,
                obra.contribucion_area,obra.publico_objetivo,obra.datos_proyecto_asociado,
                obra.forma_ajusta_mision_udem,obra.observaciones_finales,id];
    let respuesta = await _servicio.ejecutarSql(sql, valores);
    
    return respuesta;
};


// exportar los metodos para ser usados en otros archivos

module.exports = { validarObra, guardarObra, consultarObra, eliminarObra,editarObra };