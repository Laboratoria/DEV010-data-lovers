import { example, filtrarIdioma, ordenar, filtrarPaisesLimitantes, calcularArea } from './data.js'; //aqui se agrego ordenar de AZ para darle funcionalidad al boton desde data.js
//import { example, filtrarDataLimites} from './data.js';

import data from './data/countries/countries.js';
 
// Mostrar en Lista desplegable la información

const opcionSeleccionada = document.getElementById("opciones");
const botonInicio = document.getElementById("volver");
botonInicio.addEventListener("click", volverInicio);
function volverInicio() {
  ocultarContenidos();
}
function ocultarContenidos() { 
  document.getElementById("idioma").style.display = "none";
  document.getElementById("limites").style.display="none";
  document.getElementById("areaForm").style.display="none";
  document.getElementById("opciones").style.display = "block";
  pintarData(data.countries)
 }


opcionSeleccionada.addEventListener("change",function(){

  const valorSeleccionado= opcionSeleccionada.value;
  if(valorSeleccionado==="limitantes"){
    document.getElementById("limites").style.display="block";
    document.getElementById("areaForm").style.display="none";
    document.getElementById("idioma").style.display="none";
    

  
  }
  else if(valorSeleccionado==="idioma"){
    document.getElementById("idioma").style.display="block";
    document.getElementById("areaForm").style.display="none";
    document.getElementById("limites").style.display="none";

  }
  
  else if(valorSeleccionado==="calculo"){
    document.getElementById("areaForm").style.display="block";
    document.getElementById("idioma").style.display="none";
    document.getElementById("limites").style.display="none";

    
  }
  
})

// me trae de la data nombre y banderas
const root = document.getElementById('root');

//movimiento de las banderas  y  informacion trasera de las bandera 

function pintarData (data){
  let contentRootInfo = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].subregion === 'South America') {
        const country = data[i];
        const languages = Object.values(country.languages).join(', ');
  
        contentRootInfo += `<div class="bandera-container">
            <div class="bandera-wrapper">
                <img src="${country.flags.png}" class="Bandera" id="bandera-${i}"/>
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
}
pintarData(data.countries)

// Botton 1 Organizar


const buttonOrdenar = document.getElementById('button1'); // Obtén una referencia al botón de ordenar
buttonOrdenar.addEventListener('click', () => { // Agrega un evento de clic al botón
  const banderasOrdenadas = ordenar(root.querySelectorAll('.bandera-container'),"asc"); // Llama a la función ordenarAZ para ordenar las banderas de A a Z
  root.innerHTML = '';// Elimina las banderas originales
  banderasOrdenadas.forEach(bandera => { // Agrega las banderas ordenadas al root nuevamente
    root.appendChild(bandera);
  });
});

const buttonOrdenarReverse = document.getElementById('button2'); // Obtén una referencia al botón de ordenar
buttonOrdenarReverse.addEventListener('click', () => { // Agrega un evento de clic al botón
  const banderasOrdenadas = ordenar(root.querySelectorAll('.bandera-container'),"dsc"); // Llama a la función ordenarAZ para ordenar las banderas de A a Z
  root.innerHTML = '';// Elimina las banderas originales
  banderasOrdenadas.forEach(bandera => { // Agrega las banderas ordenadas al root nuevamente
    root.appendChild(bandera);
  });
});


//Boton de filtros paises limitantes.

const selectPais = document.getElementById('limites');
limites.addEventListener("change",function(){
  const paisElegido = selectPais.value;
  
  const paisesLimitantes = filtrarPaisesLimitantes(data, paisElegido);
  pintarData(paisesLimitantes);
  
}); 


// Boton de filtro Idioma 

  const selectIdioma = document.getElementById('idioma');
  selectIdioma.addEventListener("change",function () {
    const idiomaElegido = selectIdioma.value;
    const dataFiltradaPorIdioma = filtrarIdioma(data.countries, idiomaElegido);
   
    pintarData(dataFiltradaPorIdioma);
  }) 

//calcular área entre dos paises
  const btnCalcular = document.getElementById ('calcular')
  btnCalcular.addEventListener('click',function(){
  const inpuCalcular1 = document.getElementById('area1').value;
  const inpuCalcular2 = document.getElementById('area2').value;
  const sumaArea= calcularArea(data, inpuCalcular1,inpuCalcular2);
  alert('Area Total: '+ sumaArea)
  })