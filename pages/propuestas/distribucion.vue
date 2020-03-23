<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">

          <b-card title="Actualizar estado de obra">
            <b-card-text>Seleccione el nuevo estado de obra y agregue observaciones</b-card-text>

            <b-form action="javascript:void(0)" @submit="">
                <b-form-group id="obra" label="Obra:" label-for="autor" style=""></b-form-group>
              <b-form-group label="Estados de obra">
                    <b-form-radio v-model="state" name="some-radios" value="Aprobado">Aprobado</b-form-radio>
                    <b-form-radio v-model="state" name="some-radios" value="No Aprobado">No Aprobado</b-form-radio>
                    <b-form-radio v-model="state" name="some-radios" value="En Revision">En Revisión</b-form-radio>
                    </b-form-group>

                <b-form-group label="Observaciones">
                <b-form-input
                  class="form-control"
                  v-model="observaciones"
                  id="correo"
                  placeholder="Realizarobservaciones acerca del estado de la obra"
                />

              </b-form-group>
              <b-button type="submit">Guardar</b-button>
            </b-form>
          </b-card>
          <br />

    </b-container>
  </div>
</template>
<script src="../../assets/distribucion.js"/>
