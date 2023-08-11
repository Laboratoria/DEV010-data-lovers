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























