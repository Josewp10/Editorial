export default {
    data() {
        return {
            mensaje: "CRUD De   Seguimiento",
            enEdicion: false,
            seguimiento: {
                id: "",
                estado: "",
                comentario: "",
                acciones: true
            },
            lista_seguimiento: [ ]
        };
    },
    mounted(){
      let task = JSON.parse(localStorage.getItem("seguimiento"));
      if(task == null){
        this.lista_seguimiento.push({
            id: "001",
            estado: "activo",
            comentario: "Todo en orden",
            acciones: true
        })
          localStorage.setItem("seguimiento", JSON.stringify(this.lista_seguimiento));
            this.cargarSeguimiento();
      }else{
          this.cargarSeguimiento();
      }
    },
    methods: {
        crearSeguimiento() {
            this.lista_seguimiento.push(this.seguimiento);
            this.tarea = {
                id: "",
                estado: "",
                comentario: "",
                acciones: true
            };
        },
        eliminarSeguimiento({ item }) {
            let posicion = this.lista_seguimiento.findIndex(
                seguimiento => seguimiento.id == item.id
            );
            this.lista_seguimiento.splice(posicion, 1);
        },
        cargarSeguimiento() {
          let task = JSON.parse(localStorage.getItem("seguimiento"));
            this.lista_seguimiento  = task;
            //this.enEdicion = true;
        },
        actualizarSeguimiento() {
            let posicion = this.lista_seguimiento.findIndex(
                seguimiento => seguimiento.id == this.seguimiento.id
            );
            this.lista_seguimiento.splice(posicion, 1, this.seguimiento);
            this.seguimiento = {
                id: "",
                estado: "",
                comentario: "",
                acciones: true
            };

        }
    }
};
