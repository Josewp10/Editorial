<template>
<div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <b-container>
      <b-row align-v="center">
        <b-col></b-col>
        <b-col cols="6" align-self="center">
          <b-card>
            <b-row>
              <b-col>
                <b-img center src="@/static/images/selloeditorial.png" alt="Logo UdeM" width="120" height="120"></b-img>
              </b-col>
            </b-row>
            <b-form>
              <b-form-group id="input-group-2" label="Usuario" label-for="input-2">
                <b-form-input id="email" placeholder="someone@example.com" type="email"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
                <b-form-input id="contraseña" type="password"></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="outline-danger" href="/principal">Ingresar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
  },
  methods: {
  }
};
</script>

<script>
/*import config from "axios";
export default {
  //Asigno el layout
  layout: "login",
  data() {
    return {
      estado_id: null,
      estado_correo: null,
      estado_clave: null,
      url: "",
      message: "INICIAR SESIÓN",
      mensaje2: "",
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
            if (data.rol == 1) {
              this.$router.push("/admin");
              return;
            }
            if (!data.primera_vez) {
              this.$router.push("/perfil");
            } else {
              this.$router.push("/home");
            }
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
};*/
</script>

          

                        