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
        lista_tareas: [
            {
              id: "0001",
              nombre: "Revisar Obras",
              descripcion: "Revisión de nueva versión de obras ajustada según observaciones, para visto bueno final",
              encargado: "Sello Editorial",
              acciones: true
            }
          ],
        };
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
        },
        eliminarTareas({ item }) {
          let posicion = this.lista_tareas.findIndex(
            tarea => tarea.id == item.id
          );
          this.lista_tareas.splice(posicion, 1);
        },
        cargarTarea({ item }) {
          let task = this.lista_tareas.find(
            tarea => tarea.id == item.id
          );
          this.enEdicion = true;
          this.tarea = Object.assign({}, task);
        },
        actualizarTarea() {
          let posicion = this.lista_tareas.findIndex(
            tarea => tarea.id == this.tarea.id
          );
          this.lista_tareas.splice(posicion, 1, this.tarea);
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