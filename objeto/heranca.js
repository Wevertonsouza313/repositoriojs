const ferrari = {
    modelo: 'A4',
    vel: 400
}

const volvo = {
    modelo: 'A6',
    vel: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
