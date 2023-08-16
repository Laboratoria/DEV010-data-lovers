function filterPokemonsByType(pokemons, type) {
  return pokemons.filter(pokemon => pokemon.type.includes(type));
} // funcion para el primer filtro por tipo de pokemon

function generateQuickMoveNames(quickMoves) {
  return quickMoves.map(move => move.name).join(', ');
}// extraer el nombre del string del objeto del atributo quick moves

function generateResistantList(resistantTypes) {
  return resistantTypes.join(', ');
} // extraer resistencia del objeto

function generateWeaknessesList(weaknessesTypes) {
  return weaknessesTypes.join(', ');
} 


export {
  filterPokemonsByType,
  generateQuickMoveNames,
  generateResistantList,
  generateWeaknessesList
};

