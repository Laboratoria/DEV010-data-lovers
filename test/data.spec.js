import {
  filterPokemonsByName,
  filterPokemonsByType,
  generateQuickMoveNames,
  generateResistantList,
  generateWeaknessesList,
  sortPokemonsByNameAscending,
  sortPokemonsByNameDescending,
  sortPokemonsByNumberAscending,
  calculateAverageAttack,
  
} from "../src/data";
// PRIMER TEST NOMBRE ASCEDENTE
describe('sortPokemonsByNameAscending', () => {
  it('is a function', () => {
    expect(typeof sortPokemonsByNameAscending).toBe('function');
  });

  it('returns an array of Pokemon sorted by name in ascending order', () => {
    const unsortedPokemons = [
      { name: "Charmander" },
      { name: "Bulbasaur" },
      { name: "Pikachu" },
    ];

    const sortedPokemons = sortPokemonsByNameAscending(unsortedPokemons);

    expect(sortedPokemons[0].name).toBe("Bulbasaur");
    expect(sortedPokemons[1].name).toBe("Charmander");
    expect(sortedPokemons[2].name).toBe("Pikachu");
  });
});

// SEGUNDO TEST NOMBRE DESCEDENTE
describe('sortPokemonsByNameDescending', () => {
  it('is a function', () => {
    expect(typeof sortPokemonsByNameDescending).toBe('function');
  });

  it('returns an array of Pokemon sorted by name in descending order', () => {
    const unsortedPokemons = [
      { name: "Charmander" },
      { name: "Bulbasaur" },
      { name: "Pikachu" },
    ];

    const sortedPokemons = sortPokemonsByNameDescending(unsortedPokemons);

    expect(sortedPokemons[0].name).toBe("Pikachu");
    expect(sortedPokemons[1].name).toBe("Charmander");
    expect(sortedPokemons[2].name).toBe("Bulbasaur");
  });
});

//TERCER TEST NUMERO ASCEDENTE
describe('sortPokemonsByNumberAscending', () => {
  it('is a function', () => {
    expect(typeof sortPokemonsByNumberAscending).toBe('function');
  });

  it('returns an array of Pokemon sorted by num in ascending order', () => {
    const unsortedPokemons = [
      { num: "002" },
      { num: "251" },
      { num: "100" },
    ];

    const sortedPokemons = sortPokemonsByNumberAscending(unsortedPokemons);

    expect(sortedPokemons[0].num).toBe("002");
    expect(sortedPokemons[1].num).toBe("100");
    expect(sortedPokemons[2].num).toBe("251");
  });
});

//CUARTO TEST FILTRO POR NOMBRE
describe('filterPokemonsByName', () => {
  it('is a function', () => {
    expect(typeof filterPokemonsByName).toBe('function');
  });

  it('returns Pokemon sorted by name', () => {
    const unfilteredPokemons = [
      { name: "Charmander" },
      { name: "Bulbasaur" },
      { name: "Pikachu" },
    ];

    const searchText = 'char'; // Texto para filtrar

    const filteredPokemons = filterPokemonsByName(unfilteredPokemons, searchText);

    expect(filteredPokemons[0].name).toBe("Charmander");
   
  });
});

//QUINTO TEST POR TIPO
describe('filterPokemonsByType', () => {
  it('is a function', () => {
    expect(typeof filterPokemonsByType).toBe('function');
  });

  it('returns Pokemon sorted by type', () => {
    const unfilteredPokemonsbyType = [
      { type: "bug" },
      { type: "grass" },
      { type: "rock" },
    ];

    const searchText = 'bug'; // Texto para filtrar

    const filteredPokemons = filterPokemonsByType(unfilteredPokemonsbyType, searchText);

    expect(filteredPokemons[0].type).toBe("bug");
   
  });
});
//SEXTO TEST PROMEDIO DE ATAQUE
describe('calculateAverageAttack', () => {
  it('is a function', () => {
    expect(typeof calculateAverageAttack).toBe('function');
  });

  it('returns average attack for a list of Pokemon', () => {
    const pokemonList = [
      { stats: { "base-attack": "112" } },
      { stats: { "base-attack": "118" } },
      { stats: { "base-attack": "100" } },
    ];

    const averageAttack = calculateAverageAttack(pokemonList);

    expect(averageAttack).toBe(110); 
  });

});


//SEPTIMO TEST MOSTRAR QUICK MOVES
describe('generateQuickMoveNames', () => {
  it('is a function', () => {
    expect(typeof generateQuickMoveNames).toBe('function');
  });

  it('generates a list of quick move names', () => {
    const quickMoves = [
      {
        "name": "vine whip"
      },
      {
        "name": "razor leaf"
      }
    ];

    const result = generateQuickMoveNames(quickMoves);

    expect(result).toBe("vine whip, razor leaf");
  });
});

//OCTAVO TEST RESISTENCIA
describe('generateResistantList', () => {
  it('is a function', () => {
    expect(typeof generateResistantList).toBe('function');
  });

  it('returns a list of resistant names', () => {
    const resistantData = [
      {
        "resistant": [
          "water",
          "electric",
          "grass",
          "fighting",
          "fairy"
        ]
      },
      {
        "resistant": [
          "fire",
          "grass",
          "fighting",
          "bug",
          "steel"
        ]
      }
    ];

    const generatedResistantList1 = generateResistantList(resistantData[0].resistant);
    const generatedResistantList2 = generateResistantList(resistantData[1].resistant);

    expect(generatedResistantList1).toBe("water, electric, grass, fighting, fairy");
    expect(generatedResistantList2).toBe("fire, grass, fighting, bug, steel");
  });
});


//NOVENO TEST DEBILIDADES
describe('generateWeaknessesList', () => {
  it('is a function', () => {
    expect(typeof generateWeaknessesList).toBe('function');
  });

  it('returns a list of weaknesses names', () => {
    const weaknessesData = [
      {
        "weaknesses": [
          "water",
          "electric",
          "rock"
        ]
      },
      {
        "weaknesses": [
          "fire",
          "flying",
          "psychic",
          "rock"
        ]
      }
    ];

    const generatedWeaknessesList1 = generateWeaknessesList(weaknessesData[0].weaknesses);
    const generatedWeaknessesList2 = generateWeaknessesList(weaknessesData[1].weaknesses);

    expect(generatedWeaknessesList1).toBe("water, electric, rock");
    expect(generatedWeaknessesList2).toBe("fire, flying, psychic, rock");
  });
});








