# Desarrolladores

Alejandra Álvarez Fernández
Juan José Arroyave Serna
José David Marulanda Orozco





# Funcionalidades

Nota: Crear un array con publicaciónes de pruebas.

- [A] CRUD de tareas
- [B] CRUD de seguimiento-revisión por publicación aprobada
  ```js
  {
    id_tarea: "",
    fecha: "",
    comentario: "",
    estado: "",
    archivo:""
  }
  ```
- [C] Listar seguimiento de las tareas por públicación y enviar correo con la información del seguimiento

---

# Gestión de la publicación

CRUD

- Consulta de autores, auxiliar y comité editorial
- Generación de reportes, estados e inventarios
- Dar de alta las obras

# CRUD Notificación

- Autor
- Obra en revisión
- Estado Revisión
- Comentarios

---

## Funcionalidades

- Consultar y listar propuestas
- Realizar cada paso de la propuesta.

El comité editorial presenta la propuesta de publicación aprobada, ante el Sello Editorial, así:

1. Revisión de nueva versión de obras (ajustada según observaciones), para visto bueno final
   `[Comentario, visto bueno]`
2. Solicitud de cesión de derechos a autores `Consultar de autores`
   - Envío de correo con formato adjunto `Enviar formato a autores`
   - Recepción y carga en sistema de formato diligenciado `Cargar un solo formato`
3. Envío a maquetación en sello editorial (Obra maquetada enviada al autor)
   - Revisión de auxiliar de obra `[Comentario, visto bueno]`(Aprovación o desaprovación del autor)
4. Notificación a autores `Enviar correo`
   - Con ajustes 
   - Versión maquetada para revisión
   - Versión final
5. Distribución `[Comentario, visto bueno]`
6. Solicitud de nuevas ediciones y/o reimpresiones `[Comentario, visto bueno]`
7. Consulta de autores, auxiliar, comité editorial `[Comentario, visto bueno]`
8. Generación de reportes de estados e inventarios `[Comentario, visto bueno]`
9. Dar de alta a obras `[Comentario, visto bueno]`
