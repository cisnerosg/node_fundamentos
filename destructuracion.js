let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);