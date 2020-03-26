export default {
    data() {
        return {
            mensaje: "CRUD De Tareas",
            enEdicion: false,
            obras: {
                id: "",
                imagen: "",
                nombre: "",
                nombreAutor: "",
                cesion_derechos:[],
                envio_maquetacion:[],
                notificacion:[],
                distribucion:[],
                acciones: true
            },
            lista_obras: [],
        };
    },
    mounted(){
      let task = JSON.parse(localStorage.getItem("obras"))
      if (task == null) {
        this.lista_obras.push({
            id: "0001",
            imagen: "",
            nombre: "Zootecnia 1",
            nombreAutor: "Javier Alvarez",
            cesion_derechos: [{descripción:"Descripcion 1", ruta_archivo:""}],
            envio_maquetacion:[{descripción:"Descripcion 1", ruta_archivo:""}],
            notificacion:[{tipo:"Con ajustes", comentario:"comentario 1"}],
            distribucion:[{estado:"Aprobado", observaciones:""}],
            acciones: true
        },
        {
            id: "0002",
            imagen: "",
            nombre: "Fisica",
            nombreAutor: "Juan Carlos Morales",
            cesion_derechos: [{descripción:"descripción 2", ruta_archivo:""}],
            envio_maquetacion:[{descripción:"Descripcion 1", ruta_archivo:""}],
            notificacion:[{tipo:"Versión Maquetada para revisión", comentario:"comentario 2"}],
            distribucion:[{estado:"No Aprobado", observaciones:""}],
            acciones: true
        },
        {
            id: "0003",
            imagen: "",
            nombre: "La importancia del datawarehouse en las organizaciones",
            nombreAutor: "Alvaro Vargas",
            cesion_derechos: [{descripción:"descripción 3", ruta_archivo:""}],
            envio_maquetacion:[{descripción:"Descripcion 1", ruta_archivo:""}],
            notificacion:[{tipo:"Con ajustes", comentario:"comentario 3"}],
            distribucion:[{estado:"En revision", observaciones:""}],
            acciones: true
        },
        {
            id: "0004",
            imagen: "",
            nombre: "Marketing deportivo",
            nombreAutor: "Javier Osorio  ",
            cesion_derechos: [{descripción:"descripción 3", ruta_archivo:""}],
            envio_maquetacion:[{descripción:"Descripcion 1", ruta_archivo:""}],
            notificacion:[{tipo:"Versión final", comentario:"comentario 4"}],
            distribucion:[{estado:"Aprobado", observaciones:""}],
            acciones: true
        })
        localStorage.setItem("obras", JSON.stringify(this.lista_obras));
        this.cargarObra();
      }else {
          this.cargarObra();
      }

    },
    methods: {
           cargarObra() {
             let task = JSON.parse(localStorage.getItem("obras"))
             this.lista_obras = task;
        }
    }
};
