<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <b-navbar-brand href=".">
          <b-img left src="@/static/images/logoUdem.png" width="220" height="60"></b-img>
          <center>
            <p>Gestión de la Publicación</p>
          </center>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Navegación" right>
             <b-dropdown-item class="a" href="principal">Principal</b-dropdown-item>
              <b-dropdown-item class="a" href="tareas">Gestión de Tareas</b-dropdown-item>
              <b-dropdown-item class="a" href="consultarobras">Consultar Obras</b-dropdown-item>
              <b-dropdown-item class="a" href="">Reportes</b-dropdown-item>
               <b-dropdown-item class="a" href="">Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
  </div>
</template>


