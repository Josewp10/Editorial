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
              <br />
              <b-form-group label="Identificación" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="pu_tarea.id"
                  placeholder="Ingrese Id de la Tarea"
                  id="id"
                />
                 <b-form-invalid-feedback :state="validacionId"
                >Campo obligatorio</b-form-invalid-feedback
              >
              </b-form-group>
              <b-form-group label="Nombre" label-for="nombre">
                <b-form-input
                  class="form-control"
                  v-model="pu_tarea.nombre"
                  required
                  placeholder="Ingrese Nombre de la Tarea"
                  id="nombre"
                />
                 <b-form-invalid-feedback :state="validacionNombre"
                >Campo obligatorio</b-form-invalid-feedback
              >
              </b-form-group>

              <b-form-group label="Descripción" label-for="descripcion">
                <b-form-input
                  class="form-control"
                  v-model="pu_tarea.descripcion"
                  id="descripcion"
                  required
                  placeholder="Ingrese Descripción de la tarea"
                />
                 <b-form-invalid-feedback :state="validaciondescripcion"
                >Campo obligatorio</b-form-invalid-feedback
              >
              </b-form-group>

              <b-form-group label="Módulo" label-for="modulo">
                <b-form-input
                  class="form-control"
                  v-model="pu_tarea.modulo"
                  id="modulo"
                  required
                  placeholder="Ingrese Módulo al que pertenece la tarea"
                />
              </b-form-group>

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear Tarea</b-button>
              <b-button @click="actualizarTarea()" variant="primary" v-else>Actualizar Tarea</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <b-table striped hover :items="lista_tareas"  v-show="showTable">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" @click="cargarTarea(row)" class="mr-2" variant="danger">Modificar</b-button>
              <b-button size="sm" @click="eliminarTareas(row)" class="mr-2">Eliminar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/tareas.js"/>
