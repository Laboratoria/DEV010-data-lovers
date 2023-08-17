import {filterPokemonsByName, filterPokemonsByType, generateQuickMoveNames, generateResistantList, generateWeaknessesList } from './data.js';
import pokemonData from './data/pokemon/pokemon.js';

// Obtiene los datos de los pokémones
const pokemons = pokemonData.pokemon;

// Obtiene el contenedor donde se mostrarán las tarjetas
const pokemonContainer = document.getElementById('pokemon-container');

// Genera una tarjeta HTML para un Pokémon dado
function generatePokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Genera listas de movimientos, resistencias y debilidades
    const quickMoveNames = generateQuickMoveNames(pokemon['quick-move']);
    const resistantList = generateResistantList(pokemon.resistant);
    const weaknessesList = generateWeaknessesList(pokemon.weaknesses);
    const filteredPokemons = filterPokemonsByName(pokemons, "Bulbasaur");


    // Llena la tarjeta con información del Pokémon
    card.innerHTML = `  
        <img src="${pokemon.img}" alt="${pokemon.name}"> 
        <h3>#${pokemon.num}</h3>
        <h2>${pokemon.name}</h2>  
        <div class="additional-info"> 
        <p1>About: ${pokemon.about}</p1> <br> <br><hr>
        <p2>Rarity: ${pokemon['pokemon-rarity']}</p2><br><br>
        <p3>Type: ${pokemon.type.join(', ')}</p3><br><br>
        <p4>${pokemon.generation.num}</p4><br><br>
        <p5>Quick move: ${quickMoveNames}</p5><br><br>
        <p6>Resistant: ${resistantList}</p6><br><br>
        <p7>Weaknesses: ${weaknessesList}</p7><br><br>
        </div>
    `;

    return card;
}

function showPokemons(selectedType, nameFilter) {
    pokemonContainer.innerHTML = ''; // Limpia el contenedor antes de agregar tarjetas

    if (selectedType === '' && !nameFilter) {
        // Mostrar todos los pokémones si no se selecciona un tipo ni se proporciona un filtro de nombre
        for (const pokemon of pokemons) {
            const card = generatePokemonCard(pokemon);
            pokemonContainer.appendChild(card);
        }
    } else {
        let filteredPokemons = pokemons;

        if (selectedType !== '') {
            // Filtrar por tipo si se selecciona un tipo
            filteredPokemons = filterPokemonsByType(filteredPokemons, selectedType);
        }

        if (nameFilter) {
            // Filtrar por nombre si se proporciona un filtro de nombre
            filteredPokemons = filterPokemonsByName(filteredPokemons, nameFilter);
        }

        // Mostrar los pokémones filtrados
        for (const pokemon of filteredPokemons) {
            const card = generatePokemonCard(pokemon);
            pokemonContainer.appendChild(card);
        }
    }
}

// Obtiene el elemento select de tipos
const typeSelect = document.getElementById('type-select');
// Obtiene el elemento de input de nombre
const nameInput = document.getElementById('name-input');

// Agrega un evento para detectar cambios en la selección de tipos
typeSelect.addEventListener('change', event => {
    const selectedType = event.target.value;
    const nameFilter = nameInput.value;
    showPokemons(selectedType, nameFilter);
});

// Agregar evento para detectar cambios en el campo de nombre
nameInput.addEventListener('input', () => {
    const selectedType = typeSelect.value;
    const nameFilter = nameInput.value;
    showPokemons(selectedType, nameFilter);
});

// Mostrar todos los pokémones al cargar la página inicialmente
showPokemons('', ''); // Mostrar todos los pokémones al principio

