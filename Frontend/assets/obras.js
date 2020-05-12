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
                    console.log(lista_obra);
                    //this.enEdicion = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        almacenarObra(item){
            let obra = lista_obra[item.index].nombre
            console.log(obra);
            
            localStorage.setItem(nombreObra, obra)
        }
    }
};
