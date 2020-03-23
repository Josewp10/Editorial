<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col>
          <b-card title="Gestión de seguimiento">
            <b-img left="3px" src="@/static/images/question.png" width="80" height="80"></b-img>
            <b-card-text>A continuación selecione la tarea revisada y en el estado que se encuentra:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearSeguimiento()">
              <br>
              <b-form-group label="Código Obra" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="seguimiento.id"
                  placeholder="Ingrese Id de la Obra"
                  id="id"
                />
              </b-form-group>

              <b-form-group>
                <b-form-select v-model="seguimiento.estado" :options="opciones_estados"></b-form-select>
              <br/>
              </b-form-group>

              <b-form-group>
              <b-form-select v-model="seguimiento.tareas" :options="opciones_listaTarea"></b-form-select>
              <br>
              </b-form-group>

              <b-form-textarea  v-model="seguimiento.comentario" id="Comentario" size="lg" placeholder="Comentario"></b-form-textarea>

              <br />
              <br />

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear Seguimiento</b-button>

              <b-button @click="actualizarSeguimiento()" variant="primary" v-else>Actualizar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <b-table striped hover :items="lista_seguimiento">

            <template v-slot:cell(acciones)="row">
              <b-button
                size="sm"
                @click=""
                class="mr-2"
                variant=""
                href="../propuestas/propuestas"
              >Tareas</b-button>
              <br>
              <b-button
                size="sm"
                @click="cargarSeguimiento(row)"
                class="mr-2"
                variant="warning"
              >Modificar</b-button>
              <br>
              <b-button
                size="sm"
                @click="eliminarSeguimiento(row)"
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

<script src="../assets/seguimiento.js"/>
