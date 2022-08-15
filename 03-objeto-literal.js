const persona = {
    nombre: 'Tony',
    apellido: 'stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 11212124,
        lat: 14.22222,
        lng: 12.2323312
    }


};

// console.table({persona});


const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);