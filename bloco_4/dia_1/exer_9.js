// 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let num1 = 150;
let num2 = 26;
let num3 = 15012;
function impar(n1, n2, n3) {
  if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    return true;
  }
  return false;
}

console.log(impar(num1, num2, num3));

console.log('');