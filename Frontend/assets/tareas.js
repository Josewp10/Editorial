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
              this.cargarTarea();
        }else{
            this.cargarTarea();
        }

      },
      methods: {
        /**
         * Método que crea nuevas tareas haciendo una verificación con el identificador
         * al no existir el elemento, se agrega a la lista de tareas y esta al localStorage
         */
         crearTareas() {
           let existente = this.lista_tareas.find(x => this.tarea.id === x.id)
          if(existente){
            alert("Tarea existente, verifique los datos")
          }else {
            this.lista_tareas.push(this.tarea);
            localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
          }
          this.tarea = {
            id: "",
            nombre: "",
            descripcion: "",
            encargado: "",
            acciones: true
          };
        },
        /**
         * Método que elimina elementos de la lista de tareas y actualiza el localStorage
         * @param JSON Object
         */
        eliminarTareas({ item }) {
          let posicion = this.lista_tareas.findIndex(
            tarea => tarea.id == item.id
          );
          this.lista_tareas.splice(posicion, 1);
          localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
        },
        /**
         * Método que carga y lista las obras desde localStorage
         */
        cargarTarea() {
          let task = JSON.parse(localStorage.getItem("tareas"));
            this.lista_tareas  = task;
        },
        /**
         * Método que actualiza un elemento tomando como base el identificadorde este
         * y luego actualiza en el localStorage
         */
        actualizarTarea(item) {

          let task = this.lista_tareas[item.index];
          
          console.log("TASK:"+task.id);
          //this.lista_tareas.splice(posicion, 1, this.tarea);
          //localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));
          this.tarea = {
             id: "",
            nombre: "",
            descripcion: "",
            encargado: "",
            acciones: true
          };
        },

      }
    };
