
import data from './data/pokemon/pokemon.js';
import {busquedaNomNum, filtrarPorTipo, sortData} from './data.js';



const rootElement = document.getElementById("root");
function pokemonCards(pokemonArray){
  //const pokemonArray = data.pokemon;//data.pokemon accede a la matriz del objeto pokemon y se en la var pokemon Array
  pokemonArray.forEach(pokemonInfo=>{
    //Crear elementos HTML para guardar la informacion de cada pokemon
    const pokemonCard = document.createElement('div'); //HTML
    pokemonCard.classList.add('pokemon-container'); //CSS

    const pokemonImg = document.createElement('img'); //HTML
    pokemonImg.classList.add('pokemon-img'); //CSS
    pokemonImg.src = pokemonInfo.img;
    pokemonCard.appendChild(pokemonImg);

    const pokemonName = document.createElement('h3');//HTML
    pokemonName.classList.add('pokemon-name'); //CSS
    pokemonName.textContent = pokemonInfo.name;
    pokemonCard.appendChild(pokemonName);

    const pokemonNumber = document.createElement('p');
    pokemonNumber.classList.add('pokemon-number');
    pokemonNumber.textContent = `#${pokemonInfo.num}`;
    pokemonCard.appendChild(pokemonNumber);
    
    pokemonCard.addEventListener('click', async () => { //asincrónica con await
      const pokemonDetails = await busquedaNomNum(data, pokemonInfo.num);
      cardDetalladas(pokemonDetails);
    });

    rootElement.appendChild(pokemonCard);
    
  });
}
//document.addEventListener('DOMContentLoaded', pokemonCards);
document.addEventListener('DOMContentLoaded', () => {
  pokemonCards(data.pokemon);
});
/*function cardDetalladas(pokemonInfo){

  const modal = document.createElement("div");
  modal.classList.add('pokemon-modal');

  const contenidoModal = `
      <h2>${pokemonInfo.name}</h2>
      <p>Número: ${pokemonInfo.num}</p>
      <p>Tipo: ${pokemonInfo.type.join(', ')}</p>
      <p>Descripción: ${pokemonInfo.about}</p>
      <p>
    `;
  const ventanaEmerge = window.open('', '_blank', 'width=300,height=300');//una nueva ventana,se abre en una pestaña.
  ventanaEmerge.document.write(`<html><body>${contenidoModal}</body></html>`);
  ventanaEmerge.document.close();
}*/

function cardDetalladas(pokemonInfo) {
  const modal = document.getElementById('modal');
  const modalName = document.getElementById('modal-pokemon-name');
  const modalDetails = document.getElementById('modal-pokemon-details');

  modalName.textContent = pokemonInfo.name;
  modalDetails.innerHTML = `<strong>Number:</strong> ${pokemonInfo.num}<br><strong>Type:</strong> ${pokemonInfo.type.join(',')}<br><strong>Description:</strong> ${pokemonInfo.about} 
    `;


  modal.style.display = 'block';

  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';

  }); 
  
  
}


document.addEventListener('DOMContentLoaded', () => {
  pokemonCards(data.pokemon);
}); 


// BUSQUEDA POR NOMBRE O NUMERO 
const inputElement = document.getElementById("input");
const btnBuscar = document.getElementById("btn-buscar");

btnBuscar.addEventListener("click", () => {
  const recibeNomNum = inputElement.value;

  const busquedaInfo = busquedaNomNum(data, recibeNomNum);
  //return pokemon.name.includes(recibeNomNum);
  rootElement.innerHTML = "";
  if (busquedaInfo) {
    pokemonCards([busquedaInfo]);
  }
  if (!isNaN(recibeNomNum)){
    const num = parseInt(recibeNomNum);
    if(num < 1 || num > 251){
      alert("Ingresa un número valido del 1 al 251");
    } else { throw new TypeError("Error");
      
    }
  }
  
});
  


//else{ TypeError("El pokemon que buscaste no esta disponible")
  
//BUSQUEDA POR ELEMENTO
const btnType = document.getElementById("btn-buscarType");
const tipoDeSeleccion = document.getElementById("types");

btnType.addEventListener("click", () => {
  //const selectType = "";
  const seleccion = tipoDeSeleccion.value;
  
  const filtrarPokemon = filtrarPorTipo(data, (pokemon) => {
    return pokemon.type.includes(seleccion);
  });
  rootElement.innerHTML = "";
  pokemonCards(filtrarPokemon);
});

const btnOrdenarNombre = document.getElementById('btn-ordenar-nombre');
btnOrdenarNombre.addEventListener('click', () => {
  const pokemonOrdenados = sortData(data, 'name', 'asc');
  rootElement.innerHTML = '';
  pokemonCards(pokemonOrdenados);
});

const btnOrdenarNumero = document.getElementById('btn-ordenar-numero');
btnOrdenarNumero.addEventListener('click', () => {
  const pokemonesOrdenados = sortData(data, 'num', 'asc',);
  rootElement.innerHTML = '';
  pokemonCards(pokemonesOrdenados);
});


