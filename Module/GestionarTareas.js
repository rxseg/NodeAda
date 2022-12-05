const datos = require('./datos');
const entrada = require('./RespuestaCliente')

exports.guardar = async () => {
    let tarea = await entrada.RespuestaCliente( 2 , "Digite la descripcion de la tarea: ")
    datos.tareas.push({
       id: datos.tareas.length,
       descripcion : tarea,
       estado: false
   })
   console.table(datos.tareas)
}

exports.eliminar = async () => {
    let res = await entrada.RespuestaCliente( 2 , "Digite el id de la tarea: ")
    const id = Number(res) 
    let nuevadata  =  datos.tareas.filter((tarea)=> tarea.id !== id)
    console.table(nuevadata)
}
exports.editar = async () => {
    let res = await entrada.RespuestaCliente( 2 , "Digite el id de la tarea: ")
    let res2 = await entrada.RespuestaCliente( 2 , "Digite la nueva descripcion: ")
    const id = Number(res) 
    let obj  =  {
        id: id,
        descripcion : res2,
        estado: false
    }

    for (let i = 0; i < datos.tareas.length; i++) {
        if (datos.tareas[i].id === id) {
            datos.tareas[i] = obj
        }
    }
    console.table(datos.tareas)
}