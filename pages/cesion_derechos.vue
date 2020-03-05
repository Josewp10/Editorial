<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">

          <b-card title="Solicitud de cesion de derechos">
            <b-card-text>A continuación eleccione el autor, el formato y agregue un comentario para la cesión de derechos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="guardar()">
              <b-form-select v-model="datos.autor" :options="options" ></b-form-select>
              <b-form-group label="Comentarios" label-for="comentarios">
                <b-form-input
                  class="form-control"
                  v-model="datos.comentarios"
                  id="correo"
                  placeholder="Descripción de solicitud"
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


<script src="../assets/cesion_derechos.js"/>
