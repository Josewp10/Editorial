export default {
    data() {
        return {
            mensaje: "CRUD De Tareas",
            enEdicion: false,
            obras: {
                id: "",
                imagen: "",
                nombre: "",
                nombreAutor: "",
                acciones: true
            },
            lista_obras: [
                {
                    id: "0001",
                    imagen: "",
                    nombre: "Zootecnia 1",
                    nombreAutor: "Javier Alvarez",
                    acciones: true
                },
                {
                    id: "0002",
                    imagen: "",
                    nombre: "Fisica",
                    nombreAutor: "Juan Carlos Morales",
                    acciones: true
                },
                {
                    id: "0003",
                    imagen: "",
                    nombre: "La importancia del datawarehouse en las organizaciones",
                    nombreAutor: "Alvaro Vargas",
                    acciones: true
                },
                {
                    id: "0003",
                    imagen: "",
                    nombre: "Marketing deportivo",
                    nombreAutor: "Javier Osorio  ",
                    acciones: true
                },

            ],
        };
    },
    methods: {

        cargarObra({ item }) {
            let task = this.lista_obras.find(
                obras => obras.id == item.id
            );
            this.enEdicion = true;
            this.obras = Object.assign({}, task);
        }
    }
};