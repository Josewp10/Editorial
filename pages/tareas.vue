<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col>
          <b-card title="Gestión de Tareas">
            <b-img left="3px" src="@/static/images/smartphone.png" width="70" height="70"></b-img>
            <b-card-text>A continuación inserte las tareas que ejecutara el módulo de gestión de la publicación :</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearTareas()">
              <b-form-group label="Identificación" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="tarea.id"
                  placeholder="Ingrese Id de la Tarea"
                  id="id"
                />
              </b-form-group>
              <b-form-group label="Nombre" label-for="nombre">
                <b-form-input
                  class="form-control"
                  v-model="tarea.nombre"
                  placeholder="Ingrese Nombre de la Tarea"
                  id="nombre"
                />
              </b-form-group>

              <b-form-group label="Descripción" label-for="descripcion">
                <b-form-input
                  class="form-control"
                  v-model="tarea.descripcion"
                  id="correo"
                  placeholder="Ingrese Descripción de la tarea"
                />
              </b-form-group>

              <b-form-group label="Encargado" label-for="encargado">
                <b-form-input
                  class="form-control"
                  v-model="tarea.encargado"
                  id="correo"
                  placeholder="Ingrese Encargado de realizar la tarea"
                />
              </b-form-group>

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear Tarea</b-button>
              <b-button @click="actualizarTarea()" variant="primary" v-else>Actualizar Tarea</b-button>
            </b-form>
          </b-card>
          <br />
          <b-button href="/notificaciones" variant="primary">Notificar a Autores</b-button>
          <b-button href="/notificaciones" variant="primary">Cesion de derechos</b-button>

        </b-col>
        <b-col>
          <b-table striped hover :items="lista_tareas">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" @click="actualizarTarea(row)" class="mr-2" variant="warning">Modificar</b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminarTareas(row)"
                class="mr-2"
                variant="danger"
              >Eliminar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script src="../assets/tareas.js"/>
