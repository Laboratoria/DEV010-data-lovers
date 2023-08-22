// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};



// Calcula Area entre dos paises
export const calcularArea = (data, inpuCalcular1, inpuCalcular2) => {
  const pais1 = data.countries.find(pais => pais.name.common === inpuCalcular1); //se busca el pais en la data ingresado
  const pais2 = data.countries.find(pais => pais.name.common === inpuCalcular2);
  if (pais1 !== undefined && pais2 !== undefined) {
    return pais1.area + pais2.area;
  }
  else if (pais1 === pais2) {
    return pais1.area}

  else {
    return ('No existe alguno de los paises intente de nuevo')
  }
};

// Ordenar paises 
export const ordenar = (banderas, tipo) => {
  banderas.sort((a, b) => { //// Ordena las banderas clonadas por nombre de A a Z
    if (tipo === "asc") {
      return a.name.common.localeCompare(b.name.common);
    }
    else if (tipo === "dsc") {
      return -a.name.common.localeCompare(b.name.common);
    }
  });

  return banderas
};


// Data por Limites 
export const filtrarPaisesLimitantes = (data, paisElegido) => {
  const paisesLimitantes = [];
  const pais = data.countries.find(pais => pais.name.common === paisElegido); // Buscamos el país que el usuario eligió

  if (pais) { // Si encontramos el país, buscamos sus países vecinos
    pais.borders.forEach(border => {
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
  const dataFiltradaIdioma = [];
  for (let i = 0; i < data.length; i++) {
    const lenguajes = data[i].languages;
    for (const key in lenguajes) {
      if (lenguajes[key] === idiomaElegido) {
        dataFiltradaIdioma.push(data[i])
      }
    }
  }
  return dataFiltradaIdioma;


