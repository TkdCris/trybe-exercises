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

// let tamanho = 13;
// let string = '';
// for (let i = 0; i < tamanho; i++) {
//   for (let j = -1; j < i; j++) {
//     string += '*';
//     j += i;
//   }
//   console.log(string);
// }



// 3- Agora inverta o lado do triângulo. Por exemplo:

let colunas = 9;
let linhas = Math.ceil(colunas/2);
let cont = 1;

for (i = 0; i < linhas; i++) {
  let string = '';
  for (j = 0; j < colunas; j++){
    if (j < colunas - cont) {
      string += ' ';
    }else{
      string += '*';
    }

  }
  if (i > 0) {
    for (c = 0; c < i; c++) {
      string += '*';
    }
  }
  cont++;
  console.log(string);
}



// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****