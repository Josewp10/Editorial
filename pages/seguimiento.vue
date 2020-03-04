<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col>
          <b-card title="Gestión de seguimiento">
            <b-card-text>A continuación selecione la tarea revisada y en el estado que se encuentra:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearTareas()">
              <b-form-group label="Código Obra" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="tarea.id"
                  placeholder="Ingrese Id de la Obra"
                  id="id"
                />
              </b-form-group>

              <div>
                <b-dropdown label="Seleccione la tarea" id="tareas" text="Lista de tareas" class="m-md-2">
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
              </div>
              <div>
                <b-dropdown id="estado" text="Estados" class="m-md-2">
                  <b-dropdown-item>Activo</b-dropdown-item>
                  <b-dropdown-item> Inactivo</b-dropdown-item>
                </b-dropdown>
              </div>
              

            <b-form-textarea id="Comentario" size="lg" placeholder="Comentario"></b-form-textarea>
              
              <br> <br> 

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear Tarea</b-button>
              <b-button @click="actualizarTarea()" variant="primary" v-else>Actualizar Tarea</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <b-table striped hover :items="lista_tareas">
            <template v-slot:cell(acciones)="row">
              <b-button
                size="sm"
                @click="cargarTarea(row)"
                class="mr-2"
                variant="warning"
              >Modificar</b-button>
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