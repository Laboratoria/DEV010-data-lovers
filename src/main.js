// gracias gaby 
//Creo que lo logramos!!!
// Importa los datos de los Pokémon
 
import pokemonData from './data/pokemon/pokemon.js';

const pokemons = pokemonData.pokemon; // Accede a la propiedad "pokemon"

for (const pokemon of pokemons) {
    const card = document.createElement('div'); // For recorre el arreglo pokemons, crea un nuevo elemento <div> para cada elemento en el arreglo y le añade la clase card. 
    card.classList.add('card');
//Informacion que se mostrara de cada Tarjeta 
    card.innerHTML = `  
        <img src="${pokemon.img}" alt="${pokemon.name}"> 
        <p>#${pokemon.num}</p>
        <h2> ${pokemon.name}</h2>  
        <div class="additional-info"> 
        <p> ${pokemon['pokemon-rarity']}</p>
        <p> ${pokemon.type}</p>
        <p> About: ${pokemon.about}</p>
        <p> Evolution: ${pokemon.evolution}</p>
        <p> ${pokemon.generation.num}</p>
        <p> Quick move: ${pokemon['special-attack']}</p>
        <p> Resistant: ${pokemon.resistant}</p>
        </div>
    `;

    document.body.appendChild(card); //Agrega el elemento card como un hijo del elemento body, para que el elemento card se muestre en la página, dentro del contenido principal.
}