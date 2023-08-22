import { example, filtrarIdioma, ordenar, filtrarPaisesLimitantes, calcularArea } from '../src/data.js';
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
//Test Calcular Area

describe('calcularArea', () => {
  it('returns `calcularArea`', () => {
    const nombrePais = "Colombia";
    const nombrePais2 = "Peru";
    expect(calcularArea(data, nombrePais, nombrePais2)).toBe(2426964);
  });


  it('returns `calcularArea`', () => {
    const nombrePais = "Brazil";
    const nombrePais2 = "Brazil";
    expect(calcularArea(data, nombrePais, nombrePais2)).toEqual(17031534);
  });

});

// test Idioma
describe('filtrarIdioma', () => {
  it('returns `filtrarIdioma`', () => {
    const idiomaFiltrado = "Dutch";

    expect(filtrarIdioma(data, idiomaFiltrado)).toBe['Suriname'];
  });
});

describe('key', () => {
  it('returns `key`', () => {
    const key = "Dutch";
    expect(filtrarIdioma(data, key)).toBe['Suriname'];
  });
});

describe('lenguajes', () => {
  it('returns `lenguajes`', () => {
    const lenguajes = "Dutch";
    expect(filtrarIdioma(data, lenguajes)).toBe['Suriname'];
  });
});



//ordenar

describe('ordenar', () => {
  it('returns `ordenar`', () => {
    const listaPaises = [{ 'name': { 'common' : 'Argentina' }}, { 'name': { 'common' : 'Brazil' }}, { 'name': { 'common' : 'Bolivia'}}];
    const resultadoEsperado = listaPaises.sort((a,b) => a.name.common.localeCompare(b.name.common))
    
    const resultadoObtenido = ordenar(listaPaises, 'asc')

    expect(resultadoObtenido).toEqual(resultadoEsperado);
  });
});





// test Limites

describe('filtrarPaisesLimitantes', () => {
  it('devuelve una lista de países limitantes válida', () => {

    const paisElegido = 'Colombia';

    const paisesLimitantes = filtrarPaisesLimitantes(data, paisElegido);
    expect(Array.isArray(paisesLimitantes)).toBe(true);
  });
});