// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



// Calcula Area entre dos paises
export const calcularArea = (data, inpuCalcular1,inpuCalcular2) =>{
  const pais1 = data.countries.find(pais => pais.name.common === inpuCalcular1); //se busca el pais en la data ingresado
  const pais2= data.countries.find(pais => pais.name.common === inpuCalcular2);

  if (pais1 != null && pais2 != null) {
    return pais1.area + pais2.area;
  }
  else if (pais1===pais2){
    return pais1.area
  }
  else {
    return('No existe alguno de los paises intente de nuevo')
  }
};

// Ordenar paises 
export const ordenar = (banderas, tipo) => {
  const banderasClonadas = [...banderas]; // Clona las banderas existentes
  banderasClonadas.sort((a, b) => { //// Ordena las banderas clonadas por nombre de A a Z
    const nombreA = a.querySelector('h4').textContent;
    const nombreB = b.querySelector('h4').textContent; 
    if (tipo== "asc") {
      return nombreA.localeCompare(nombreB);
    }
    else if ( tipo== "dsc"){
      return nombreA.localeCompare(nombreB)*-1;
    }
   
  });

  return banderasClonadas;
  
};
// Data por Limites 
export const filtrarPaisesLimitantes = (data, paisElegido) => {
  const paisesLimitantes = [];
  const pais = data.countries.find(pais => pais.name.common === paisElegido); // Buscamos el país que el usuario eligió
      if (pais) { // Si encontramos el país, buscamos sus países vecinos
    pais.borders.forEach(border => {
      const paisVecino = data.countries.find(pais => pais.fifa=== border);
      if (paisVecino) {
        paisesLimitantes.push(paisVecino);
      }
    });
  }
  return paisesLimitantes;
};

// Data por Idioma
export const filtrarIdioma = (data, idiomaElegido) =>{
  const dataFiltradaIdioma = [];
  for (let i=0; i<data.length; i++){
    let lenguajes = data[i].languages;
    for(const key in lenguajes) {
      if(lenguajes[key] === idiomaElegido) {
        dataFiltradaIdioma.push(data[i])
      }
    }    
  }
  return dataFiltradaIdioma;
  
}