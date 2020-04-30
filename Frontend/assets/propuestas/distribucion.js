export default {
    data() {
      return {
        nombreObra:"",
        selected: '',
        //Obras para alimentar el listado de selección
        temporal: {
          id: "",
          imagen: "",
          nombre: "",
          nombreAutor: "",
          estado:''
        },
        lista_obras: [
            {
                id: "0001",
                imagen: "",
                nombre: "Zootecnia 1",
                nombreAutor: "Javier Alvarez",
                estado:'revision'
            },
            {
                id: "0002",
                imagen: "",
                nombre: "Fisica",
                nombreAutor: "Juan Carlos Morales",
                estado:'revision'
            },
            {
                id: "0003",
                imagen: "",
                nombre: "La importancia del datawarehouse en las organizaciones",
                nombreAutor: "Alvaro Vargas",
                estado:'revision'
            },
            {
                id: "0003",
                imagen: "",
                nombre: "Marketing deportivo",
                nombreAutor: "Javier Osorio  ",
                estado:'revision'
            }
        ],
      }
    },
    mounted(){
  },

    methods:{

      guardar(){
        let posicion = this.lista_tareas.findIndex(
          tarea => temporal.id == this.temporal.id)

          this.lista_obras.splice(posicion, 1, this.temporal);
          this.temporal = {
            id: "",
            imagen: "",
            nombre: "",
            nombreAutor: "",
            estado:''
          }
      }
    }

  }
