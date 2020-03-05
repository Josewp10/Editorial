<template>
  <div>
    <br />
    <br />

    <b-container class="bv-example-row mb-3">
      <b-row cols="1">
        <b-col></b-col>
        <b-col>
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Consulte obras..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-col>
        
        <b-col>
          <br>
          <b-table striped hover :items="lista_obras">
            <template v-slot:cell(acciones)="row">
              <b-button href="/notificaciones" size="sm" @click="cargarObra(row)" class="mr-2" variant="primary">Ver</b-button>
              <br />
              <br />
              <b-button href="/seguimiento" size="sm" class="mr-2" variant="danger">Revisar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="../assets/consultarobras.js"/>