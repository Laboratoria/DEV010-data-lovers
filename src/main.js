import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const root = document.getElementById('root');

let contentRoot = '';
for (let i= 0; i<data.countries.length; i++) {  
    if(data.countries[i].subregion === "South America") {
       contentRoot += `<img src="${data.countries[i].flags.png}" class="Bandera">`;    
    }
    
}
root.innerHTML=contentRoot;

const buttons = document.querySelectorAll('anside button');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeButtonColor() {
  buttons.forEach(button => {
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
  });
}

// Cambiar el color de los botones automáticamente cada 2 segundos
setInterval(changeButtonColor, 2000);
























