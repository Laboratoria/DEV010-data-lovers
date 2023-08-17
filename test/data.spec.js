import { example, anotherExample, calcularArea, filtrarIdioma } from '../src/data.js';
import data from '../src/data/countries/countries.js';

//describe, descripcion de un conjunto de test
describe('example', () => {
  // it, planteamos cada test
  // descripcion del test
  it('is a function', () => {
    // expect - la prueba
    //matcher - toBe, toEqual
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

//----------------------------------
describe ('calcularArea', () =>{
it ('returns `calcularArea`' , () => {
  const nombrePais = "Colombia";
  const nombrePais2 = "Peru";
  expect (calcularArea(data, nombrePais, nombrePais2)).toBe(2426964);
} );
});

describe ('calcularArea', () =>{
it ('returns `calcularArea`' , () => {
  const nombrePais = "Brazil";
  const nombrePais2 = "Brazil";
  expect (calcularArea(data, nombrePais, nombrePais2)).toEqual(17031534);
} );
});

describe ('calcularArea', () =>{
it ('returns `calcularArea`' , () => {
  const nombrePais = "xxx";
  const nombrePais2 = "Brazil";
  expect (calcularArea(data, nombrePais, nombrePais2)).toBe('No existe alguno de los paises intente de nuevo');
} );
});

describe ('filtrarIdioma', () =>{
  it ('returns `filtrarIdioma`' , () => {
    const idiomaFiltrado = "Dutch";

    expect (filtrarIdioma(data,idiomaFiltrado)).toBe['Suriname'];
  });
});


