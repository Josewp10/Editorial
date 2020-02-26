let autor = [{
  id:0,
  nombres:"",
  apellidos:"",
  otras_obras:"",

}]

let obra = [{
  id:0,
  titulo:"El libro",
  id_autor:0,
  genero:"melo",
  subgenero:"",
  fecha_expedicion:"",
  editorial:"mm",
  estado_revision:"pendiente",
  comentarios:"melito"
}]

function listar_obras() {
  let data = ""

  for (var i = 0; i < obra.length; i++) {
    let lista = obra[i];
    data += `<tr>`
    data += `<td>${lista.titulo}</td>`
    data += `<td>${lista.autor}</td>`
    data += `<td>${lista.estado_revision}</td>`
    data += `<td>${lista.comentarios}</td>`
    data += `<td><button type="button" class="btn btn-primary" onClick=editar_estado(`+i+`)>Editar estado</button></td>`
    data += `</tr>`

  }
  document.getElementById('lista_obras').innerHTML = data;
}

lista_obras();
