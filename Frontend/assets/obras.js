import axios from 'axios'

export default {
    data() {
        return {
            mensaje: "CRUD De Obra",
            enEdicion: false,
            nombreObra:"",
            seguimiento: {
                id: "",
                titulo: "",
                acciones: true
            },
            lista_obra: [],
        };
    },
    created() {
        this.listarObras();
        almacenarDatos();
    },
    computed: {
      
    },
    methods: {
        listarObras() {
            let arreglo = []
            let arregloNombre = []
            axios
                .get("http://127.0.0.1:3001/obra")
                .then(response => {
                    console.log(response);
                    arreglo = response.data.info;

                    if (this.nombreObra == "") {
                        this.lista_obra = arreglo;
                        for (let i in this.lista_obra) {
                            this.lista_obra[i].acciones = true;
                        }
<<<<<<< HEAD
                        
                    }else{
                        this.lista_obra = arreglo.filter(e =>{return e.indexOf(this.nombreObra)> -1})
=======

                    } else {
                        for (let i in arreglo) {
                            if (arreglo[i].titulo.toLowerCase() == this.nombreObra.toLowerCase()) {


                                this.lista_obra = []
                                this.lista_obra.push(arreglo[i])
                            }
                        }

>>>>>>> cd3fe2336ac9e4e622732ca814f0b0e2f6038cd4
                        for (let i in this.lista_obra) {
                            this.lista_obra[i].acciones = true;
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
<<<<<<< HEAD
        almacenarDatos(item){
            if(this.lista_obra){
                sessionStorage.setItem('obra', JSON.stringify(this.lista_obra));
                console.log(sessionStorage.getItem('obra'));
            }
        }
=======
>>>>>>> cd3fe2336ac9e4e622732ca814f0b0e2f6038cd4


        
    }
};
