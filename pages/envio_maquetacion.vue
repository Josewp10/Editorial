<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">

          <b-card title="Solicitud de cesion de derechos">
            <b-card-text>A continuación eleccione el autor, el formato y agregue un comentario para la cesión de derechos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="listarAutores()">
              <b-form-select v-model="selected" :options="options" ></b-form-select>
              <b-form-group label="Comentarios" label-for="comentarios">
                <b-form-input
                  class="form-control"

                  id="correo"
                  placeholder="Descripción de formato"
                />
                <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                <br>
                <b-button @click="guardar()" variant="primary" >Enviar</b-button>
              </b-form-group>

            </b-form>
          </b-card>
          <br />

    </b-container>
  </div>
</template>


<script src="../assets/envio_maquetacion.js"/>
