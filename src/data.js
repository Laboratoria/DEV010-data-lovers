// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filtrarIdioma = (data, inputIdioma) =>{
  const dataFiltradaIdioma = []
  for (let i=0; i<data.length; i++){
    let lenguajes = data[i].languages;
    for(const key in lenguajes) {
      if(lenguajes[key]=== inputIdioma.value) {
        dataFiltradaIdioma.push(data[i])
       
      }
    }    
  }
  return dataFiltradaIdioma
}


