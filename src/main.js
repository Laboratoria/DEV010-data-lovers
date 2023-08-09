// Importa los datos de los Pokémon
 
import pokemonData from './data/pokemon/pokemon.js';

const pokemons = pokemonData.pokemon; // Accede a la propiedad "pokemon"

for (const pokemon of pokemons) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `  
        <img src="${pokemon.img}" alt="${pokemon.name}"> 
        <p>#${pokemon.num}</p>
        <h2> ${pokemon.name}</h2>  
        <p> ${pokemon['pokemon-rarity']}</p>
        <p> ${pokemon.type}</p>
        <div class="additional-info">
        <p> About: ${pokemon.about}</p>
        <p> Evolution: ${pokemon.evolution}</p>
        <p> ${pokemon.generation.num}</p>
        <p> Quick move: ${pokemon['special-attack']}</p>
        <p> Resistant: ${pokemon.resistant}</p>
        </div>
    `;

    document.body.appendChild(card);
}