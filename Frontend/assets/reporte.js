import axios from 'axios'

export default {
    data() {
        return {
            mensaje: "Reporte",
        };
    },
    mounted() {
        this.generarPdf();
    },
    computed: {

    },
    methods: {
        generarPdf() {
            //let response = await this.$axios.get("http://127.0.0.1:3001/pdf/publicaciones");
            //var link = document.createElement("reporte");
            //link.href = url;
            //link.target = "blank";
            //document.body.appendChild(link);
            //link.click();
        }
    }
};