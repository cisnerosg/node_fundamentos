// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        callback(`el usuario con id ${id}, no existe`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('usuario', usuario);

});