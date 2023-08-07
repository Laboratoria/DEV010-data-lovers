import { example } from './data.js';
import data from './data/countries/countries.js';

console.log(example, data);

const root = document.getElementById('root');

//movimiento de las banderas 

let contentRootInfo = '';
for (let i = 0; i < data.countries.length; i++) {
  if (data.countries[i].subregion === 'South America') {
      const country = data.countries[i];
      const languages = Object.values(country.languages).join(', ');

      contentRootInfo += `<div class="bandera-container">
          <div class="bandera-wrapper">
              <img src="${country.flags.png}" class="Bandera" id="bandera-${i}">
              <h4>${country.name.common}</h4> 
          </div>
          <div class="info-back">
              <h4>${country.name.common}</h4>
              <p>Población: ${country.population}</p>
              <p>Área: ${country.area}</p>
              <p>Países Frontera: ${country.borders}</p>
              <p>Idiomas: ${languages}</p>
          </div>
      </div>`;
  }
}

root.innerHTML=contentRootInfo;

const banderaImages = document.querySelectorAll('.Bandera');

banderaImages.forEach(image => {
  const container = image.closest('.bandera-container');
  const infoBack = container.querySelector('.info-back');
  
  image.addEventListener('click', function () {
    container.classList.toggle('show-info');
    image.classList.toggle('rotate');
  });

  infoBack.addEventListener('click', function () {
    container.classList.remove('show-info');
    image.classList.remove('rotate');
  });
});

//Boton de filtros paises limitantes.

// Debemos llamar las funciones que vamos a uctilizar 
const  btnLimites = document.getElementById('limitantes'); // El boton 

btnLimites.addEventListener("click", function () { // Activo la funcion del botones
  const inputPais = document.getElementById('input'); // Traigo el inpu que se creo para colocar el nombre 
  let banderasLimitantes = ''; // Variable con cadena de texto vacia 
  for (let i= 0; i<data.countries.length; i++) { // Este for es para que me busque la palabra que coloque en la data
    if(data.countries[i].name.common== inputPais.value) { //Se hace el recorrido cuando sea el mismo nombre lo debe traer 
      let borders = data.countries[i].borders // Creo una variable que sea igual a la data segun lo que se requiera 

      
      for (let j= 0; j<borders.length; j++) {  // Este for me trae los bordes paises limites de cada pais 
        for (let k= 0; k<data.countries.length; k++) {  // Este for me trae la imagen de la badera con el nombre 
          if(borders[j] === data.countries[k].fifa) { // si los bordes son iguales a lo que tengo en la data me traiga imagenes
              banderasLimitantes += `<div class="bandera-wrapper"> 
              <img src="${data.countries[k].flags.png}" class="Bandera" 
              <h4>${data.countries[k].name.common}</h4> 
             </div>`;   
          }
        }
      }
    }
  }
  root.innerHTML = banderasLimitantes;
  });

// Boton de filtro Idioma 
  const btnIdioma = document.getElementById('idioma')
  let banderasByIdioma = '';

  btnIdioma.addEventListener('click',function () {
    const inputIdioma = document.getElementById('input');
    for (let i=0; i<data.countries.length; i++){
      let lenguajes = data.countries[i].languages;
      for(const key in lenguajes) {
        if(lenguajes[key]=== inputIdioma.value) {
          banderasByIdioma += `<div class="bandera-wrapper"> 
              <img src="${data.countries[i].flags.png}" class="Bandera" 
              <h4>${data.countries[i].name.common}</h4> 
             </div>`;
        }
      }    
    }
    root.innerHTML = banderasByIdioma;
  })


  


















