import axios from 'axios'

export default {
    data() {
        return {
            mensaje: "Reporte",
        };
    },
    created() {
        //this.generarPdf();
    },
    computed: {
      
    },
    methods: {
        /*generarPdf() {           
            axios
                .get("http://127.0.0.1:3001/pdf/publicaciones")
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }*/
    }
};