// 1- Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

// let tamanho = 3;
// let string = '';
// for (let i = 0; i < tamanho; i++) {
//   let temp_string = '';
//   for (let j = 0; j < tamanho; j++) {
//     temp_string += '*';
//   }
//   console.log(temp_string);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let tamanho = 3;
let string = '';
for (let i = 0; i < tamanho; i++) {
  for (let j = -1; j < i; j++) {
    string += '*';
  }
  console.log(string);
}
