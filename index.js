const entrada = require("./Module/RespuestaCliente.js");
const GestionarTareas = require("./Module/GestionarTareas");
let respuesta = [];

async function GestionRespuesta() {
  let res = await entrada.RespuestaCliente(
    1,
    "1: Guardar ; 2: Eliminar ; 3: Editar "
  );
  respuesta = [];
  respuesta.push(Number(res));

  let opera = respuesta[0];

  switch (opera) {
    case 1:
      GestionarTareas.guardar();
      break;
    case 2:
      GestionarTareas.eliminar();
      break;
    case 3:
      GestionarTareas.editar();
      break;
  }
}

GestionRespuesta();
