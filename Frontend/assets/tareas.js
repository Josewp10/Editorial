export default {
    data() {
      return {
        mensaje: "CRUD De Tareas",
        enEdicion: false,
        tarea: {
          id: "",
          nombre: "",
          descripcion: "",
          acciones: true
        },
        lista_tareas: [],
        };
      },
      mounted(){
          this.lista_tareas.push({
            id: "0001",
            nombre: "Revisar Obras",
            descripcion: "Revisión de nueva versión de obras ajustada según observaciones, para visto bueno final",
            acciones: true
          })

    
      },
      methods: {
        /**
         * Método que crea nuevas tareas haciendo una verificación con el identificador
         * al no existir el elemento, se agrega a la lista de tareas y esta al localStorage
         */
         crearTareas() {
           
        },
        /**
         * Método que elimina elementos de la lista de tareas y actualiza el localStorage
         */
        eliminarTareas({ item }) {
          
        },
        /**
         * Método que carga y lista las obras desde localStorage
         */
        cargarTarea() {
    
        },
        /**
         * Método que actualiza un elemento tomando como base el identificadorde este
         * y luego actualiza en el localStorage
         */
        actualizarTarea(item) {

          
        },

      }
    };
