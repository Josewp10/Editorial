<template>
  <b-container class="bv-example-row mb-3">
    <br />
    <b-row cols="1">
      <b-col>
        <b-card bg-variant="link">
          <b-img center src="@/static/images/revision.png" width="80" height="80"></b-img>  
          <b-form-group
            label-cols-lg="3"
            label="Notificación a Autores"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          ></b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Tipo de Notificación:"
            label-align-sm="right"
            label-for="tipo"
          >
            <b-form-select v-model="notificacion.tiponotificacion":options="opciones_notificacion"></b-form-select>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Comentario:"
            label-align-sm="right"
            label-for="comentario"
          >
            <b-form-textarea id="textarea-large" size="lg" placeholder="Comentario"></b-form-textarea>
          </b-form-group>

          <b-button size="sm" class="mr-2" variant="warning">Enviar Correo</b-button>
        </b-card>
        <b-col></b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="../assets/notificaciones.js"/>