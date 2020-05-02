<template>
  <div class="container">
    <div>
      
        <b-img center src="@/static/images/study.png" width="250" height="250"></b-img>
      
      <h1 class="title">Bienvenido al</h1>
      <h2 class="subtitle">Módulo Gestión de la Publicación</h2>
      <b-button href="/tareas" variant="primary"><b-img center src="@/static/images/checklist.png" width="50" height="50"></b-img>Gestión de Tareas</b-button>
      <b-button href="/acercade" variant="warning"><b-img center src="@/static/images/team.png" width="50" height="50"></b-img>Desarrolladores</b-button>
      <b-button href="/consultarobras" variant="danger"><b-img center src="@/static/images/search.png" width="50" height="50"></b-img>  Buscar Obras </b-button>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


</style>
