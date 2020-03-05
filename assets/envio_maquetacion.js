export default {
    data() {
      return {
        autor:"",
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
      mounted(){
      this.nombrar()},

      methods:{
        nombrar(){
          document.getElementById("autor").innerHTML = "Autor: "+localStorage.getItem(0);
        },
        //Almacena los datos recibidos en el listado de maquetaciones
        guardar(){
          this.maquetaciones.push(this.datos);
          console.log(autor);
          this.datos = {
            autor:"",
            formato: null,
            comentarios:""
          };

        }
      }
    };
