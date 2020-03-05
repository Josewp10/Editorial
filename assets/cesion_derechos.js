export default {
    data() {
      return {
        file:null,
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

        tarea: {
          id: "",
          formato: "",
          comentario: ""
        },
        };
      },
      methods: {
        listarAutores() {
            for (var i = 0; i < this.autores.length; i++) {
              let lista = autores[i];
               let temporal = {value: lista.id, text: lista.nombre}
               this.options.push(temporal);
            }
        },
        guardar(){

        }
      }
    };
