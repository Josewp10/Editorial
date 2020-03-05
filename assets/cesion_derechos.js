export default {
    created(){

    },
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
        solicitudes:[{
          autor:"",
          formato: null,
          comentarios:""
        }]
        };

      },
      mounted(){this.localS()
      this.nombrar()},

      methods:{
        nombrar(){
          document.getElementById("autor").innerHTML = "Autor: "+localStorage.getItem(0);
        },

        guardar(){
          this.solicitudes.push(this.datos);
          this.datos = {
            autor:"",
            formato:null,
            comentarios:""
          };
          console.log();
        },

        localS(){
          var local = JSON.parse(localStorage.getItem('01'))
          if (local===null) {this.solicitudes = [];
          }else{
            this.solicitudes=local;
          }
        }

      },
    };
