<template id="">
  <div class="container">
    <div class="">
        <b-img center src="@/static/images/propuesta.jpg" width="250" height="250"></b-img>


          <b-button href="cesion_derechos" variant="primary">Cesión de derechos</b-button>


          <b-button href="envio_maquetacion" variant="primary">Envio maquetacion</b-button>
          <b-button href="notificaciones" variant="primary">Notificación de autor</b-button>
          <b-button href="distribucion" variant="primary">Distribución</b-button>
    </div>
    <br>
    <div>
      <b-button v-b-toggle.c-derechos variant="primary">cesion de derechos</b-button>
      <b-collapse id="c-derechos" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
    <br>
    <div>
      <b-button v-b-toggle.c-maquetacion variant="primary">Envio maquetacion</b-button>
      <b-collapse id="c-maquetacion" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
    <br>
    <div>
      <b-button v-b-toggle.c-notificacion variant="primary">Notificación de autor</b-button>
      <b-collapse id="c-notificacion" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
    <br>
    <div>
      <b-button v-b-toggle.c-distribucion variant="primary">Distribución</b-button>
      <b-collapse id="c-distribucion" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>

  </div>


</template>
<script src="../../assets/propuestas/propuesta.js"/>
