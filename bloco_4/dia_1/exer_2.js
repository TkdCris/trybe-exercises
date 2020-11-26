
// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function retornaMaior (a,b) {
  if (a > b) {
    return a;
  }else if (a < b) {
    return b;
  }
  return 'São iguais';
}

console.log(retornaMaior(20, 201));


console.log('-----------');
