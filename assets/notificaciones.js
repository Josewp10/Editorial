export default {
    data() {
        return {
            mensaje: "Notificación a Autores",
            enEdicion: false,
            notificacion: {
                tiponotificacion: "",
                comentario: "",
                acciones: true
            },

            notificaciones: [
                {
                    tiponotificacion: "con Ajustes",
                    comentario: "esta muy buena",
                    acciones: true
                }
            ],
            opciones_notificacion: [
                { value: null, text: "Seleccione una carrera", disabled: true },
                { value: "001", text: "Con Ajustes" },
                { value: "002", text: "Versión Maquetada para Revisión" },
                { value: "003", text: "Versión Final" }
            ]
        };
    },
    methods: {
        crearNotificación() {
            this.notificaciones.push(this.notificacion);
            this.notificacion = {
                tiponotificacion: "",
                comentario: "",
                acciones: true
            };
        },


    }
};