import {
  filterPokemonsByName,
  filterPokemonsByType,
  generateQuickMoveNames,
  generateResistantList,
  generateWeaknessesList,
  sortPokemonsByNameAscending,
  sortPokemonsByNameDescending,
  sortPokemonsByNumberAscending,
  
} from "./data.js";

import pokemonData from "./data/pokemon/pokemon.js";

// Obtiene los datos de los pokémones
const pokemons = pokemonData.pokemon;

// Genera una tarjeta HTML para un Pokémon dado
function generatePokemonCard(pokemon) {

  const card = document.createElement("div");
  card.classList.add("card");
  
  // Genera listas de movimientos, resistencias y debilidades
  const quickMoveNames = generateQuickMoveNames(pokemon["quick-move"]);
  const resistantList = generateResistantList(pokemon.resistant);
  const weaknessesList = generateWeaknessesList(pokemon.weaknesses);
  
  // Llena la tarjeta con información del Pokémon
  card.innerHTML = `  
            <img src="${pokemon.img}" alt="${pokemon.name}"> 
            <h3>#${pokemon.num}</h3>
            <h2>${pokemon.name}</h2>  
            <div class="additional-info"> 
            <p1>About: ${pokemon.about}</p1> <br> <br><hr>
            <p2>Rarity: ${pokemon["pokemon-rarity"]}</p2><br><br>
            <p3>Type: ${pokemon.type.join(", ")}</p3><br><br>
            <p4>${pokemon.generation.num}</p4><br><br>
            <p5>Quick move: ${quickMoveNames}</p5><br><br>
            <p6>Resistant: ${resistantList}</p6><br><br>
            <p7>Weaknesses: ${weaknessesList}</p7><br><br>
            </div>
        `;
  
  return card;
}

function showPokemons(selectedType, nameFilter, sortedPokemons, sortedPokemons2, sortedPokemonsByNumber) {
  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = ""; // Limpia el contenedor antes de agregar tarjetas
  
  let filteredPokemons = [...pokemons]; // Crear una copia de pokemons para no modificar la lista original

  if (nameFilter) {
    // Filtrar por nombre si se proporciona un filtro de nombre
    filteredPokemons = filterPokemonsByName(filteredPokemons, nameFilter);
  }
  
  if (selectedType !== "") {
    // Filtrar por tipo si se selecciona un tipo
    filteredPokemons = filterPokemonsByType(filteredPokemons, selectedType);
  }

  if (sortedPokemons) {
    // Ordenar por nombre ascendente si el botón de orden ascendente está activo
    filteredPokemons = sortPokemonsByNameAscending(filteredPokemons);
  }

  if (sortedPokemons2) {
    // Ordenar por nombre descendente si el botón de orden descendente está activo
    filteredPokemons = sortPokemonsByNameDescending(filteredPokemons);
  }
  
  if (sortedPokemonsByNumber) {
    // Ordenar por número ascendente si el botón de orden ascendente por número está activo
    filteredPokemons = sortPokemonsByNumberAscending(filteredPokemons);
  }

  // Mostrar los pokémones filtrados y ordenados
  for (const pokemon of filteredPokemons) {
    const card = generatePokemonCard(pokemon);
    pokemonContainer.appendChild(card);
  }
}


const typeSelect = document.getElementById("type-select");
const nameInput = document.getElementById("name-input");
const ascendButton = document.getElementById("ascend-button");
const descendButton = document.getElementById("descend-button");
const ascendNumberButton = document.getElementById("ascend-number-button");


// Agrega un evento para detectar cambios en la selección de tipos
typeSelect.addEventListener("change", (event) => {
  const selectedType = event.target.value;
  const nameFilter = nameInput.value;
  const sortedPokemons = sortPokemonsByNameAscending(pokemons);
  const sortedPokemons2 = sortPokemonsByNameDescending(pokemons);

  showPokemons(selectedType, nameFilter,sortedPokemons, sortedPokemons2);
});
  
// Agregar evento para detectar cambios en el campo de nombre
nameInput.addEventListener("input", () => {
  const selectedType = typeSelect.value;
  const nameFilter = nameInput.value;
  const sortedPokemons = ascendButton.classList.contains("active"); // Verificar si el botón de orden ascendente está activo
  const sortedPokemons2 = descendButton.classList.contains("active"); // Verificar si el botón de orden descendente está activo
  showPokemons(selectedType, nameFilter, sortedPokemons, sortedPokemons2);
});

// Agregar evento para el botón "Ascendente"
ascendButton.addEventListener("click", () => {
  const selectedType = typeSelect.value;
  const nameFilter = nameInput.value;
  const sortedPokemons = true; // Establecer orden ascendente
  const sortedPokemons2 = false; // Establecer orden descendente a falso
  showPokemons(selectedType, nameFilter, sortedPokemons, sortedPokemons2);
  ascendButton.classList.add("active"); // Marcar el botón como activo
  descendButton.classList.remove("active"); // Desactivar el botón descendente
});

// Agregar evento para el botón "Descendente"
descendButton.addEventListener("click", () => {
  const selectedType = typeSelect.value;
  const nameFilter = nameInput.value;
  const sortedPokemons = false; // Establecer orden ascendente a falso
  const sortedPokemons2 = true; // Establecer orden descendente
  showPokemons(selectedType, nameFilter, sortedPokemons, sortedPokemons2);
  descendButton.classList.add("active"); // Marcar el botón como activo
  ascendButton.classList.remove("active"); // Desactivar el botón ascendente
});
// Agregar evento para el botón "Ascendente" por número
ascendNumberButton.addEventListener("click", () => {
  const selectedType = typeSelect.value;
  const nameFilter = nameInput.value;
  const sortedPokemons = false; // Establecer orden ascendente por nombre a falso
  const sortedPokemons2 = false; // Establecer orden descendente por nombre a falso
  const sortedPokemonsByNumber = true; // Establecer orden ascendente por número
  showPokemons(selectedType, nameFilter, sortedPokemons, sortedPokemons2, sortedPokemonsByNumber);
  ascendButton.classList.remove("active"); // Desactivar el botón ascendente por nombre
  descendButton.classList.remove("active"); // Desactivar el botón descendente por nombre
  ascendNumberButton.classList.add("active"); // Marcar el botón ascendente por número como activo
});

// Mostrar todos los pokémones al cargar la página inicialmente
showPokemons("", "", false, false); // Mostrar todos los pokémones al principio
