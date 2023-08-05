import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example, data);

//LLAMAR AL ELEMENTOS DEL DOM 
const rootElement = document.getElementById("root");

function pokemonCards(){
    const pokemonArray = data.pokemon //con data.pokemon accedemos a la matriz del objeto pokemon y la almacenamos en la variable pokemon Array 
    pokemonArray.forEach(pokemoninfo=>{

        //Crear elementos HTML para guardar la informacion de cada pokemon 
        const pokemonCard = document.createElement('div'); //HTML 
        pokemonCard.classList.add('pokemon-container'); //CSS

        const pokemonImg = document.createElement('img'); //HTML
        pokemonImg.classList.add('pokemon-img'); //CSS
        pokemonImg.src = pokemoninfo.img;
        //pokemonImg.alt= pokemon.name;
        pokemonCard.appendChild(pokemonImg);

        const pokemonName = document.createElement('h3');//HTML
        pokemonName.classList.add('pokemon-name'); //CSS
        pokemonName.textContent = pokemoninfo.name;
        pokemonCard.appendChild(pokemonName);

        const pokemonNumber = document.createElement('p');
        pokemonNumber.classList.add('pokemon-number');
        pokemonNumber.textContent = `#${pokemoninfo.num}`;
        pokemonCard.appendChild(pokemonNumber);

        rootElement.appendChild(pokemonCard);
        
        console.log(pokemonCard);
        

    });
}
document.addEventListener('DOMContentLoaded', pokemonCards);
    
    









