<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">

          <b-card title="Envio obra maquetada">
            <b-card-text>Seleccione el autor, el archivo y agregueun comentario</b-card-text>

            <b-form action="javascript:void(0)" @submit="guardar()">
            <b-form-group id="autor" label="Archivo:" label-for="autor"></b-form-group>
                <b-form-input
                  class="form-control"
                  v-model="datos.comentarios"
                  id="correo"
                  placeholder="Descripción de formato"
                />
                <b-form-file v-model="datos.formato" class="mt-3" plain></b-form-file>
                <br>

              </b-form-group>
                <b-button type="submit">Guardar</b-button>
            </b-form>
          </b-card>
          <br />

    </b-container>
  </div>
</template>


<script src="../../assets/envio_maquetacion.js"/>
