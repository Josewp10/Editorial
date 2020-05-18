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
    },
    computed: {
      
    },
    methods: {
         listarObras(nombreObra) {
            let arreglo = []
            axios
                .get("http://127.0.0.1:3001/obra")
                .then(response => {
                    console.log(response);
                    arreglo = response.data.info;
                    if (!this.nombreObra ) {
                        this.lista_obra = arreglo;
                        for (let i in this.lista_obra) {
                            this.lista_obra[i].acciones = true;
                        }
                        sessionStorage.setItem('obra', JSON.stringify(this.lista_obra));
                        console.log(sessionStorage.getItem('obra'));
                    }else{
                        this.lista_obra = arreglo.filter(e =>{return e.indexOf(this.nombreObra)> -1})
                        for (let i in this.lista_obra) {
                            this.lista_obra[i].acciones = true;
                        }
                    }
                
                })
                .catch(error => {
                    console.log(error);
                });
        }

        
    }
};
