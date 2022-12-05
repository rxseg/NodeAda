const respuesta = [];

function RespuestaCliente () {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          
          readline.question(`What's your name?`, name => {
            resolve(name)
            readline.close();
          });
    })
}

async function GestionRespuesta () {
    let res = await RespuestaCliente()
    respuesta.push(res)
     
    console.log(respuesta)
}

GestionRespuesta()
