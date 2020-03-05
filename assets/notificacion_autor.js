export default {
    data() {
      return {
        selected: '',
        state:'',
        observaciones:'',
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
        ]
      }
    },
    methods: {
      guardar(){

      }
    }

  }
