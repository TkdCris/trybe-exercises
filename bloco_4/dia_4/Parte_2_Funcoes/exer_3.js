// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let numeros = [2, 4, 6, 7, 10, 0, -3];

function posicaoDoMaior(array) {
  let menor = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (menor > array[i]) {
      index = i;
    }
  }
  return index;
}

console.log(posicaoDoMaior(numeros));
