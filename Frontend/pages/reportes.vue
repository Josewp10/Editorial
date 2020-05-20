<template>
  <div>
    <br />
    <center>
      <b-card class="container">
        <b-button type="submit" variant="danger" @click="generarPdf()">Generar Reporte</b-button>
      </b-card>
    </center>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/reporte.js"/>