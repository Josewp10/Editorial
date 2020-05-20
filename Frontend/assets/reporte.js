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
           /* let response = await this.$axios.get("http://localhost:3001/pdf/publicaciones").then(response => {
                var link = document.createElement("reporte");
                link.href = url;
                link.target = "blank";
                document.body.appendChild(link);
                link.click();
              })
              .catch(error => {
                console.log(error);
              });*/
       
        }
    }
};