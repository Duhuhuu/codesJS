// Desectructuración
// Asignacion DEsestructurante
const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'iroman'
};

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usContext = ({clave,nombre,edad, rango='capitan'})=>{
    // const {nombre, edad, clave} = usuario;
    // console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.23123132123,
            lng: -12.23123
        }
    }

}


// Una Forma de Extraer los datos es con esto
// const avenger = usContext(persona);
// const {nombreClave, anios} = avenger;
// Hasta aqui

// forma de extraer los datos (Desectructuracion)!
// const {nombreClave,anios, latlng:{lat,lng}} = usContext(persona);
const {nombreClave,anios, latlng} = usContext(persona);
const {lat, lng} = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);

