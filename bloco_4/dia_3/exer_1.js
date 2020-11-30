// 1- Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let tamanho = 3;
let string = '';
for (let i = 0; i < tamanho; i++) {
  let temp_string = '';
  for (let j = 0; j < tamanho; j++) {
    temp_string += '*';
  }
  console.log(temp_string);
}