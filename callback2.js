let empleados = [{
        id: 1,
        nombre: 'fernando'
    },
    {
        id: 2,
        nombre: 'alberto'
    },
    {
        id: 3,
        nombre: 'marta'
    },
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`no existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salario = salarios.find(salario => salario.id === empleado.id);

    if (!salario) {
        callback(`No se encontró salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salario.salario })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
    })
});