const nombre = 'Gabriel';
const apellido = 'Angulo';

//const nombreCompleto = nombre + ' '+ apellido;
const nombreCompleto = `
${ nombre }
${apellido}
${1+1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){

    return 'Hola Mundo ' + nombre;

}

console.log( `Este es un Texto: ${getSaludo(nombre)}`)