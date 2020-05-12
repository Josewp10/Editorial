<template>
  <div>
    <b-container class="bv-example-row mb-3">
      <b-row cols="1">
        <b-col>
          <br />
          <b-img left src="@/static/images/selloeditorial.png" width="60" height="60"></b-img>
        </b-col>
        <b-col>
          <b-input-group class="mt-3">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button variant="danger"><b-img center="" src="@/static/images/buscar.png" width="25" height="25"></b-img></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>

        <b-col>
          <br />
          <b-table striped hover :items="lista_obra">
            <template v-slot:cell(acciones)="row">
              <b-button href="/seguimiento" size="sm" class="mr-2" variant="link"><b-img center="" @click="almacenarObra(row)" src="@/static/images/revisar.png" width="40" height="40"></b-img>Revisar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/obras.js"/>
