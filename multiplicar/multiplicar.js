const fs = require('fs');
const { isNumber } = require('util');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";
        if (!isNumber(base)) {
            reject(`El valor introducido ${base} no es un número`);

            return;
        }
        for (let i = 1; i <= limite; i++)
            data += `${base} * ${i} = ${i * base}\n`;

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);

            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

/****
 * Aun que el límite por default es 10 podemos establecer el default en la función de flecha
 */
let listarTabla = (base, limite = 10) => {
    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);
    for (let i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${i * base}`);
}

module.exports = {
    crearArchivo,
    listarTabla
}