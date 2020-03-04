export default {
    data() {
        return {
            mensaje: "CRUD De   Seguimiento",
            enEdicion: false,
            seguimiento: {
                id: "",
                tareas: "",
                estado: "",
                comentario: "",
                acciones: true
            },
            lista_seguimiento: [
                {
                    id: "001",
                    tareas: "revisar obra",
                    estado: "activo",
                    comentario: "Todo en orden",
                    acciones: true
                }
              ],
              opciones_estados: [
                { value: null, text: "Seleccione el tipo de estado", disabled: true },
                { value: "Activo", text: "Activo" },
                { value: "Inactivo", text: "Inactivo" }
                
            ],
            opciones_listaTarea: [
                { value: null, text: "Seleccione el tipo de tarea", disabled: true },
                { value: "Revision obra", text: "Revision obra" }
            ]
        };
    },
    methods: {
        crearSeguimiento() {
            this.lista_seguimiento.push(this.seguimiento);
            this.tarea = {
                id: "",
                tareas: "",
                estado: "",
                comentario: "",
                acciones: true
            };
        },
        eliminarSeguimiento({ item }) {
            let posicion = this.lista_seguimiento.findIndex(
                seguimiento => seguimiento.id == item.id
            );
            this.lista_seguimiento.splice(posicion, 1);
        },
        cargarSeguimiento({ item }) {
            let task = this.lista_seguimiento.find(
                seguimiento => seguimiento.id == item.id
            );
            this.enEdicion = true;
            this.seguimiento = Object.assign({}, task);
        },
        actualizarSeguimiento() {
            let posicion = this.lista_seguimiento.findIndex(
                seguimiento => seguimiento.id == this.seguimiento.id
            );
            this.lista_seguimiento.splice(posicion, 1, this.seguimiento);
            this.seguimiento = {
                id: "",
                tareas: "",
                estado: "",
                comentario: "",
                acciones: true
            };

        }
    }
};