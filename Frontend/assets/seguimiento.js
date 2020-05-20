import axios from "axios";

export default {
  data() {
    return {
      mensaje: "CRUD De   Seguimiento",
      enEdicion: false,
      modalShow: false,
      titulo: "",
      idObra: null,
      disabled: 0,
      seguimiento: {
        id: "",
        id_tarea: "",
        fecha: "",
        estado: "",
        comentario: "",
        archivo: "",
        acciones: true
      },
      notificacion: {
        tipo: "",
        comentario: ""
      },
      lista_seguimiento: [],
      lista_tareas: [],
      opciones_estados: [
        { value: null, text: "Seleccione el tipo de estado", disabled: true },
        { value: "Aprobado", text: "Activo" },
        { value: "En Revisión", text: "En Revisión" },
        { value: "Reprobado", text: "Reprobado" },
        { value: "Cancelado", text: "Cancelado" }
      ],
      opciones_notificacion: [
        {
          value: null,
          text: "Seleccione el tipo de Notificación",
          disabled: true
        },
        { value: "Con Ajustes", text: "Con Ajustes" },
        {
          value: "Versión Maquetada para revisión",
          text: "Versión Maquetada para revisión"
        },
        { value: "Versión Final", text: "Versión Final" }
      ]
    };
  },
  mounted() {
    this.listarSeguimientos();
    this.listarTareas();
    
    this.disabled = 0;
  },
  computed: {
    validacionTarea() {
      return this.validar_condicion(this.seguimiento.id_tarea.length > 0);
    },
    validacionFecha() {
      return this.validar_condicion(this.seguimiento.fecha.length > 0);
    },
    validacionComentario() {
      return this.validar_condicion(this.seguimiento.comentario.length > 0);
    },
    validacionArchivo() {
      return this.validar_condicion(this.seguimiento.archivo.length > 0);
    },
    validacionEstado() {
      return this.validar_condicion(this.seguimiento.estado.length > 0);
    }
  },
  methods: {
    validar_condicion(bool) {
      if (bool == false) {
        this.validacion = false;
        return false;
      } else {
        this.validacion = true;
        return true;
      }
    },
    asignar() {
      this.titulo = this.$route.query.titulo;
    },
    listarSeguimientos() {
      axios
        .get(`http://127.0.0.1:3001/seguimiento/${0}`)
        .then(response => {
          console.log(response);

          console.log("ID OBRA: " + this.obra.titulo);
          this.lista_seguimiento = response.data.info;
          for (let i in this.lista_seguimiento) {
            this.lista_seguimiento[i].acciones = true;
          }

          //this.enEdicion = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    listarTareas() {
      axios
        .get("http://127.0.0.1:3001/obra/tareas")
        .then(response => {
          console.log(response);
          this.lista_tareas = response.data.info;

          console.log(this.lista_tareas);
          //alert(lista_tareas)
        })
        .catch(error => {
          console.log(error);
        });
    },
    crearSeguimiento() {
      //console.log(this.seguimiento);

      if (this.validacion == true) {
        axios
          .post("http://127.0.0.1:3001/seguimiento", this.seguimiento)
          .then(response => {
            console.log(response);

            this.lista_seguimiento.push(response.data);
            this.disabled = 0;
            this.seguimiento = {
              id: "",
              id_tarea: "",
              fecha: "",
              estado: "",
              comentario: "",
              archivo: "",
              acciones: true
            };
            this.$router.push({
              path: "seguimiento",
              query: { titulo: response.data["titulo"] }
            });
          })
          .catch(error => {
            console.log(error.response);
          });
      } else {
        alert("LLene todos los campos correctamente");
      }
    },
    cargarSeguimiento({ item }) {
      axios
        .get(`http://127.0.0.1:3001/seguimiento/${item.id}`)
        .then(response => {
          var array = response.data.info;
          this.disabled = 1;
          this.enEdicion = true;
          this.seguimiento.id = array[0].id;
          this.seguimiento.id_tarea = array[0].id_tarea;
          this.seguimiento.fecha = array[0].fecha;
          this.seguimiento.comentario = array[0].comentario;
          this.seguimiento.estado = array[0].estado;
          this.seguimiento.archivo = array[0].archivo;
          this.seguimiento.acciones = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    eliminarSeguimiento({ item }) {
      axios
        .delete(`http://127.0.0.1:3001/seguimiento/${item.id}`)
        .then(response => {
          let posicion = this.lista_seguimiento.findIndex(
            lista_seguimiento => lista_seguimiento.id == item.id
          );
          this.lista_seguimiento.splice(posicion, 1);

          console.log(response.data.info);
          console.log(item.id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    cargarSeguimiento({ item }) {
      axios
        .get(`http://127.0.0.1:3001/seguimiento/${item.id}`)
        .then(response => {
          var array = response.data.info;
          this.disabled = 1;
          this.enEdicion = true;
          this.seguimiento.id = array[0].id;
          this.seguimiento.id_tarea = array[0].id_tarea;
          this.seguimiento.fecha = array[0].fecha;
          this.seguimiento.comentario = array[0].comentario;
          this.seguimiento.estado = array[0].estado;
          (this.seguimiento.archivo = array[0].archivo),
            (this.seguimiento.acciones = true);
        })
        .catch(error => {
          console.log(error);
        });
    },
    actualizarSeguimiento() {
      if (this.validacion == true) {
        axios
          .put(
            `http://127.0.0.1:3001/seguimiento/${this.seguimiento.id}`,
            this.seguimiento
          )
          .then(response => {
            let posicion = this.lista_seguimiento.findIndex(
              seguimiento => seguimiento.id == this.seguimiento.id
            );
            this.lista_seguimiento.splice(posicion, 1, this.seguimiento);
            this.enEdicion = false;
            this.listarTareas();
            this.seguimiento = {
              id: "",
              id_tarea: "",
              fecha: "",
              estado: "",
              comentario: "",
              archivo: "",
              acciones: true
            };
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        alert("LLene todos los campos correctamente");
      }
    },
    enviarCorreo() {
      axios
        .post(
          `http://127.0.0.1:3001/enviarCorreo/notificacion`,
          this.notificacion
        )
        .then(response => {
          console.log(response);

          this.notificacion = {
            tarea: "",
            tipo: "",
            estado: "",
            comentario: ""
          };
        })
        .catch(error => {
          console.log(error);
        });
    },
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
    almacenarIndice(row) {
      this.indice = row.index;
      console.log("INDICE: " + this.indice);
    }
  }
};
