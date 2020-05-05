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
              <br />
              <br />
              <b-form-group label="Id Seguimiento" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="seguimiento.id"
                  placeholder="Ingrese Id Seguimiento"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Tareas">
                <b-form-select
                  v-model="seguimiento.tareas"
                  :options="opciones_listaTarea"
                  placeholder="Tareas"
                ></b-form-select>
                <br />
              </b-form-group>

              <b-form-group label="Fecha">
                <b-form-input v-model="text" placeholder="Fecha" type="date"></b-form-input>
              </b-form-group>

              <b-form-group label="Estado">
                <b-form-select v-model="seguimiento.estado" :options="opciones_estados"></b-form-select>
              </b-form-group>

              <b-form-file class="mt-3" plain></b-form-file>
              <br />

              <b-form-textarea
                v-model="seguimiento.comentario"
                id="Comentario"
                size="lg"
                placeholder="Comentario"
              ></b-form-textarea>

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
                @click="cargarSeguimiento(row)"
                class="mr-2"
                variant="warning"
              >Modificar</b-button>
              <br />
              <b-button
                size="sm"
                @click="eliminarSeguimiento(row)"
                class="mr-2"
                variant="danger"
              >Eliminar</b-button>
              <br />
              <b-button v-b-modal.modal-1>Enviar Notificación</b-button>
              <b-modal id="modal-1" title="Notificar a Autor">
                <b-form-group label-class="font-weight-bold pt-0" class="mb-1">
                  <b-form-group>
                    <b-img left="1px" src="@/static/images/revision.png" width="80" height="80"></b-img>
                    <b-img right src="@/static/images/selloeditorial.png" width="80" height="80"></b-img>
                  </b-form-group>
                </b-form-group>
                <b-form-group
                  label-cols-sm="3"
                  label="Tipo de Notificación:"
                  label-align-sm="right"
                  label-for="tipo"
                >
                  <b-form-select :options="opciones_notificacion"></b-form-select>
                </b-form-group>
                <b-form-group
                  label-cols-sm="3"
                  label="Comentario:"
                  label-align-sm="right"
                  label-for="comentario"
                >
                  <b-form-textarea id="textarea-large" size="lg" placeholder="Comentario"></b-form-textarea>
                  <br />
                  <b-button size="40" class="mr-4" variant="warning">Enviar Correo</b-button>
                </b-form-group>
              </b-modal>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <br />
      <br />
      <b-row>
        <b-input-group class="mt-3">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="danger">
              <b-img center src="@/static/images/buscar.png" width="25" height="25"></b-img>
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <br />
        <br />
        <b-table striped hover :items="lista_busqueda"></b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script src="../assets/seguimiento.js"/>
