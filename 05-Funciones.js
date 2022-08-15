// Funciones en JS

const saludar = function (nombre){
    return `Hola, ${ nombre}`;
}

// console.log(saludar('Goku'));

const saludar2 =(nombre) => {
    return `Hola, ${ nombre}`;
}

const saludar3 =(nombre) => `Hola, ${ nombre}`;
const saludar4 =() => `Hola,Mundo`;

console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC1234',
    username:'El_Papi1234'
});

const  user = getUser();
console.log(user);

// 
function getUsuarioActivo(){
    return {
        uid: 'ABC4444',
        username:'El_Cat777'
    }
    
};

const getUsuario = () => ({
            uid: 'ABC4444',
            username:'Gato'

});

const usuarioActivo = getUsuarioActivo('Fernando');

const userActivo = getUsuario();
console.log(userActivo);
console.log(userActivo.username);