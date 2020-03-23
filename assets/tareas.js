export default {
    data() {
      return {
        mensaje: "CRUD De Tareas",
        enEdicion: false,
        tarea: {
          id: "",
          nombre: "",
          descripcion: "",
          encargado:"",
          acciones: true
        },
        lista_tareas: [],
        };
      },
      mounted(){

        this.cargarTarea();
      },
      methods: {
         crearTareas() {
          this.lista_tareas.push(this.tarea);

          this.tarea = {
            id: "",
            nombre: "",
            descripcion: "",
            encargado: "",
            acciones: true
          };
            localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
        },
        eliminarTareas({ item }) {
          let posicion = this.lista_tareas.findIndex(
            tarea => tarea.id == item.id
          );
          this.lista_tareas.splice(posicion, 1);
          localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
        },
        cargarTarea() {
          let task = JSON.parse(localStorage.getItem("tareas"));
          if(task == null){
            this.lista_tareas.push({
              id: "0001",
              nombre: "Revisar Obras",
              descripcion: "Revisión de nueva versión de obras ajustada según observaciones, para visto bueno final",
              encargado: "Sello Editorial",
              acciones: true
            })
              localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
          }else{
            this.lista_tareas  = task;
          }
        },
        actualizarTarea() {
          let posicion = this.lista_tareas.findIndex(
            tarea => tarea.id == this.tarea.id
          );
          this.lista_tareas.splice(posicion, 1, this.tarea);
          localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
          this.tarea = {
             id: "",
            nombre: "",
            descripcion: "",
            encargado: "",
            acciones: true
          };

        }
      }
    };
