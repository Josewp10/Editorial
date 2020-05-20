import axios from "axios";
export default {
  //Asigno el layout
  layout: "login",
  data() {
    return {
      estado_id: null,
      estado_clave: null,
      url: "",
      message: "INICIAR SESIÓN",
      usuario: {
        id: "",
        clave: "",
        correo: "",
        descripcion: "",
        primera_vez: ""
      }
    };
  },
  methods: {
    validar_id() {
      return this.usuario.id.length > 0;
    },
    validar_clave() {
      return this.usuario.clave.length > 0;
    },
    cargaPagina() {
        let url = config.url_api;
        this.url = url;
      },
      iniciar() {
        let url = config.url_api + "login"; 

      if (this.usuario.id.length > 0 && this.usuario.clave.length > 0) {
        axios
          .post(url, this.usuario)
          .then(response => {
            let data = response.data;
            console.log("Data:", data);
            localStorage.setItem("token", data.info);
            localStorage.setItem("id", this.usuario.id);
            console.log("Primera vez: ", data.primera_vez);
            console.log("Rol: ", data.rol);
        
          })
          .catch(error => {
            this.mensaje2 = error.response.data.message;
            console.log(error.response);
          });
      } else {
        alert("LLene todos los campos correctamente");
      }
    }
  }
};