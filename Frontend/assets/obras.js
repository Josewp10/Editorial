import axios from 'axios'

export default {
    data() {
        return {
            mensaje: "CRUD De Obra",
            enEdicion: false,
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
        validar_condicion(bool) {
            if (bool == false) {
              this.validacion = false;
              return false;
            } else {
              this.validacion = true;
              return true;
            }
          },
        listarObras() {
            axios
                .get("http://127.0.0.1:3001/obra")
                .then(response => {
                    console.log(response);
                    this.lista_obra = response.data.info;    
                    for (let i in this.lista_obra) {
                        this.lista_obra[i].acciones = true;
                    }
                    sessionStorage.setItem('obra', JSON.stringify(this.lista_obra));
                    console.log(sessionStorage.getItem('obra'));
                    
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
