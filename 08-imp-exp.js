// Formas de importar cosas

import heroes,{owners} from './data/heroes';

console.log(owners)
// 1ra.- import { heroes} from './data/heroes'
// 2da.- import {heroes} from './data/heroes'


// const getHeroeByID = (id) =>{
//     return heroes.find((heroe)=> {
//         if (heroe.id === id){
//             return true;
//         }
//     });

// }

const getHeroeByID = (id) =>{
    return heroes.find((heroe)=> heroe.id === id);

}
// find?, Busca y filtra todos los datos de la clase con un parametro
const getHeroesByOwner= (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(heroes);
console.log (getHeroesByOwner('DC'));

console.log( getHeroeByID(2))