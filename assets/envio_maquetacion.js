export default {
    data() {
      return {

        //Arreglo que contiene la lista de autores
        autores:[{
          id:1,
          nombre:"Juan José Arroyave"
        },{
          id:2,
          nombre:"Alejandra Alvarez"
        }],

        //Arreglo utilizado para llenar el select
        options: [
          {value: 0, text: "Javier Alvarez"}
        ],
        //JSON donde se almacena la información insertada
        datos: {
          autor:"",
          formato: null,
          comentarios:""
        },
        //Listado de solicitudes realizadas
        maquetaciones:[{
          autor:"",
          formato: null,
          comentarios:""
        }]
        };

      },
      methods: {
        //Alimenta el listado de autores
        listarAutores() {
            for (var i = 0; i < this.autores.length; i++) {
              let lista = autores[i];
               let temporal = {value: this.lista.id, text: this.lista.nombre}
               this.options.push(temporal);
            }
        },
        //Almacena los datos recibidos en el listado de maquetaciones
        guardar(){
          this.maquetaciones.push(this.datos);
          this.datos = {
            autor:"",
            formato: null,
            comentarios:""
          };

        }
      }
    };
