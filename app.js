const argv = require('./config/yarvs.js').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
//console.log(process.argv);

let argv2 = process.argv;
//console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

// crearArchivo(base).then(archivo => console.log(`${archivo} creado`))
//     .catch(e => console.log(e));

let comando = argv._[0];
switch (comando) {
    case 'crear':
    case 'c':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.blue(archivo), "creado"))
            .catch(e => console.log(e));
        break;
    case 'listar':
    case 'l':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}