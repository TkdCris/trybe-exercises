
// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let array = [39 ,300 ,12];
function maiorValor(n) {
  return Math.max.apply(null, array);
}

console.log(maiorValor(array));

console.log('');