<template>
  <div>
    <b-container class="bv-example-row mb-3">
      <b-row cols="1">
        <b-col>
          <br />
          <b-img center="" src="@/static/images/ssearch.png" width="180" height="180"></b-img>
        </b-col>
        <b-col>
          <b-input-group class="mt-3">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button variant="info">Buscar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>

        <b-col>
          <br />
          <b-table striped hover :items="lista_obras">
            <template v-slot:cell(acciones)="row">
<!-- HEAD-->

              <b-button href="/seguimiento" size="sm" class="mr-2" variant="danger">Revisar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="../assets/consultarobras.js"/>
