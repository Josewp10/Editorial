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
                <b-img src="@/static/images/udem.jpg" alt="Logo UdeM"></b-img>
              </b-col>
            </b-row>
            <b-form>
              <b-form-group id="input-group-2" label="Usuario" label-for="input-2">
                <b-form-input id="email" placeholder="someone@example.com" type="email"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
                <b-form-input id="contraseña" type="password"></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="danger" href="/index">Ingresar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

          

                        