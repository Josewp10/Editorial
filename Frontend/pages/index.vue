<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <b-row align-v="center">
      <b-col></b-col>
      <b-col cols="6" align-self="center">
        <b-card class="container">
          <b-row>
            <b-col>
              <b-img
                center
                src="@/static/images/selloeditorial.png"
                alt="Logo UdeM"
                width="120"
                height="120"
              ></b-img>
            </b-col>
          </b-row>
          <b-form action="javascript:void(0)">
            <b-form-group id="input-group-2" label="Usuario" label-for="input-2">
              <b-form-input id="email" placeholder="ingrese su cédula"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
              <b-form-input id="contraseña" type="password"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="outline-danger" @click="iniciar()">Ingresar</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>




          

                        