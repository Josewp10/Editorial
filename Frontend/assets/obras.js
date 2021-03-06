import axios from "axios";

export default {
  data() {
    return {
      mensaje: "CRUD De Obra",
      enEdicion: false,
      nombreObra: "",
      seguimiento: {
        id: "",
        titulo: "",
        acciones: true
      },
      lista_obra: []
    };
  },
  created() {
    this.listarObras();
  },
  computed: {},
  methods: {
    listarObras() {
      let arreglo = [];
      let arregloNombre = [];
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
          } else {
            for (let i in arreglo) {
              if (
                arreglo[i].titulo.toLowerCase() == this.nombreObra.toLowerCase()
              ) {
                this.lista_obra = [];
                this.lista_obra.push(arreglo[i]);
              }
            }

            for (let i in this.lista_obra) {
              this.lista_obra[i].acciones = true;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    almacenarDatos(item) {
      let object = this.lista_obra[item.index];
      sessionStorage.setItem("obra", JSON.stringify(object));
      this.$router.push("/seguimiento");
    }
  }
};
