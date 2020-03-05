<template>
  <b-container class="bv-example-row mb-3">
    <br />
    <b-row cols="1">
      <b-col>
        <b-card bg-variant="link">
          <b-form-group
            label-class="font-weight-bold pt-0"
            class="mb-1"
          >
            <b-form-group>
              <b-img left="1px" src="@/static/images/revision.png" width="80" height="80"></b-img>
              <b-card-title>Notificar a Autor</b-card-title>
            </b-form-group>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Tipo de Notificación:"
            label-align-sm="right"
            label-for="tipo"
          >
            <b-form-select v-model="notificacion.tiponotificacion" :options="opciones_notificacion"></b-form-select>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Comentario:"
            label-align-sm="right"
            label-for="comentario"
          >
            <b-form-textarea id="textarea-large" size="lg" placeholder="Comentario"></b-form-textarea>
            <br>
            <b-button size="40" class="mr-4" variant="warning">Enviar Correo</b-button>
          </b-form-group>
        </b-card>
        <b-col></b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="../assets/notificaciones.js"/>