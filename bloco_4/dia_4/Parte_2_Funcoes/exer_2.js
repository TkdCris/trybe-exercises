// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let numeros = [2, 3, 6, 7, 10, 1];

function posicaoDoMaior(array) {
  let maior = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (maior < array[i]) {
      index = i;
    }
  }
  return index;
}

console.log(posicaoDoMaior(numeros));
