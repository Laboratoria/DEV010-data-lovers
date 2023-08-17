<<<<<<< Updated upstream
import { example, filtrarIdioma, ordenar, filtrarPaisesLimitantes, calcularArea } from './data.js'; //aqui se agrego ordenar de AZ para darle funcionalidad al boton desde data.js
//import { example, filtrarDataLimites} from './data.js';

import data from './data/countries/countries.js';
 
// Mostrar en Lista desplegable la información
=======
import { example } from './data.js';
import data from './data/countries/countries.js';
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream

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
               <figure>
                <img src="${country.flags.png}" class="Bandera" id="bandera-${i}" alt= 
                "${country.name.common}" />
                <figcaption>${country.name.common} </figcaption>
               </figure> 
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
=======
// me trae de la data nombre y banderas
const root = document.getElementById('root');
let contentRoot = '';
for (let i= 0; i<data.countries.length; i++) {  
    if(data.countries[i].subregion === "South America") { // selecciono solo sur america
       contentRoot += `<div class="BanderaContenedor">
        <img src="${data.countries[i].flags.png}" class="Bandera" 
        <h4>${data.countries[i].name.common}</h4> 
       </div>`;   
    }} // 
root.innerHTML=contentRoot;


// Cambiar el color de los botones automáticamente cada 2 segundos
const buttons = document.querySelectorAll('anside button'); 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;}
function changeButtonColor() {
  buttons.forEach(button => {
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
  });}
setInterval(changeButtonColor, 2000);














>>>>>>> Stashed changes


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
  const btnCalcular = document.getElementById ('calcular');
  const resultadoCalcular = document.getElementById ('resultadoCalcular');
  const closeModalButton = document.getElementById('closeModalButton');

 btnCalcular.addEventListener('click',function(){
    const inpuCalcular1 = document.getElementById('area1').value;
    const inpuCalcular2 = document.getElementById('area2').value;
    const sumaArea= calcularArea(data, inpuCalcular1,inpuCalcular2);
    
    resultadoCalcular.innerHTML = `<h2>Área Total</h2><p>El área total calculada es: ${sumaArea}</p>`;
    resultadoCalcular.style.display = 'block';
});
closeModalButton.addEventListener('click', function() {
  const inputCalcular1 = document.getElementById('area1');
  const inputCalcular2 = document.getElementById('area2');
  
  inputCalcular1.value = '';
  inputCalcular2.value = '';
  resultadoCalcular.style.display = 'none'; 

<<<<<<< Updated upstream
});
    
=======

>>>>>>> Stashed changes
