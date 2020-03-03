<template>
  <div class="container">
    <div>

      <b-button href="#">Autor</b-button>
      <b-button href="#">Cómite de Facultad</b-button>
      <b-button href="#">Sello Editorial</b-button>

      <h1 class="title">Gestión de la Publicación</h1>
      <h2 class="subtitle">Proyecto Sello Editorial</h2>
      <h2>ACA SERIA BUENO ESTILIZAR LOS BOTONES Y PARTIR DESDE ACA</h2>
    
    </div>
  </div>
</template

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
