export default {
    data() {
      return {
        selected: '',
        //Obras para alimentar el listado de selección
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
        //Opciones para el elemento Select
        options:[
          {value:0, text: "Viaje al centro de la tierra"}
        ],
      
      }
    },
    methods: {
      //Alimenta el listado de autores
      listarAutores() {
          for (var i = 0; i < this.lista_obras.length; i++) {
            let lista = lista_obras[i];
             let temporal = {value: this.lista.id, text: this.lista.nombre}
             this.options.push(temporal);
          }
      },
      guardar(){

      }
    }

  }
