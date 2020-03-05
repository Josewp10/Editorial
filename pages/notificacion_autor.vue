<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">

          <b-card title="Actualizar estado de obra">
            <b-card-text>Seleccione el nuevo estado de obra y agregue observaciones</b-card-text>

            <b-form action="javascript:void(0)" @submit="">
                <b-form-select v-model="selected" :options="options" ></b-form-select>
              <b-form-group label="Individual radios">
                    <b-form-radio v-model="selected" name="some-radios" value="Aprobado">Aprobado</b-form-radio>
                    <b-form-radio v-model="selected" name="some-radios" value="No Aprobado">No Aprobado</b-form-radio>
                    <b-form-radio v-model="selected" name="some-radios" value="En Revision">En Revisión</b-form-radio>
                <b-form-input
                  class="form-control"
                  v-model="observaciones"
                  id="correo"
                  placeholder="Observaciones"
                />
            <br>

                <b-button @click="guardar()" variant="primary" >Enviar</b-button>
              </b-form-group>

            </b-form>
          </b-card>
          <br />

    </b-container>
  </div>
</template>
<script src="../assets/notificacion_autor.js"/>
