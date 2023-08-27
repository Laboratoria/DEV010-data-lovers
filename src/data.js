// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};



// Calcula Area entre dos paises
export const calcularArea = (data, inpuCalcular1, inpuCalcular2) => {
  const pais1 = data.countries.find(pais => pais.name.common === inpuCalcular1); //find() nos envia la primera coincidencia encontrada 
  const pais2 = data.countries.find(pais => pais.name.common === inpuCalcular2);
  if (pais1 !== undefined && pais2 !== undefined) { // Se hace uso de undefined ya que deben tener valores asigandos  
    return pais1.area + pais2.area;
  }
  else if (pais1 === pais2) {
    return pais1.area;
  }

  else {
    return ('No existe alguno de los paises intente de nuevo')
  }
};

// Ordenar paises 
export const ordenar = (banderas, tipo) => { //Argumento (tipo) especifica el criterio por el cual se  va a ordenar  
  banderas.sort((a, b) => { // sort ordena los elementos de un arreglo donde se le indica que a debe ir primero que b
    if (tipo === "asc") {
      return a.name.common.localeCompare(b.name.common); //localeCompare compara a y b 
    }
    else if (tipo === "dsc") {
      return -a.name.common.localeCompare(b.name.common); // se coloca el - para que coloque b antes que a
    }
  });

  return banderas
};


// Data por Limites 
export const filtrarPaisesLimitantes = (data, paisElegido) => {
  const paisesLimitantes = [];
  const pais = data.countries.find(pais => pais.name.common === paisElegido); // find, nos envia la primera condicion encontrada 

  if (pais) { // Si encontramos el país, buscamos sus países vecinos
    pais.borders.forEach(border => { // forEach ejecuta una vez cada elemento del array
      const paisVecino = data.countries.find(pais => pais.fifa === border);
      if (paisVecino) {
        paisesLimitantes.push(paisVecino);
      }
    });
  }
  return paisesLimitantes;
};

// Data por Idioma
export const filtrarIdioma = (data, idiomaElegido) => {
  const dataFiltradaIdioma = []; // se crea un array vacio para almacenar resultados filtrados
  for (let i = 0; i < data.length; i++) { // Intera en cada elemento de data // length se uctiliza para tener el numero total de elementos de un array
    const lenguajes = data[i].languages;
    for (const key in lenguajes) { // se define variable llamada Key la cual tomara un valor del objecto lenguaje 
      if (lenguajes[key] === idiomaElegido) {
        dataFiltradaIdioma.push(data[i]) // push Agrega un elemento final al arreglo que seria data [i]
      }
    }
  }
  return dataFiltradaIdioma;
}