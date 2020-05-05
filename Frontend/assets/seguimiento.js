export default {
    data() {
        return {
            mensaje: "CRUD De   Seguimiento",
            enEdicion: false,
            seguimiento: {
                id: "",
                estado: "",
                comentario: "",
                acciones: true
            },
            lista_seguimiento: [],
            lista_busqueda:[]
        };
    },
    mounted() {
        this.lista_seguimiento.push({
            id: "001",
            estado: "activo",
            comentario: "Todo en orden",
            acciones: true
        })
        

        this.lista_busqueda.push({
            id: "001",
            NombreObra:"Zootecnia 1",
            estado: "Todo en orden",
        })
       

    },
    methods: {
        //Codigo de implementación con el Axios Api
        crearSeguimiento() {

        },
        eliminarSeguimiento({ item }) {

        },
        cargarSeguimiento() {

        },
        actualizarSeguimiento() {

        }
    }
};
