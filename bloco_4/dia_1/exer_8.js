// 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let num1 = 15;
let num2 = 26;
let num3 = 1501;
function par(n1, n2, n3) {
  if (num1 % 2 == 0 || num2 % 2 || num3 % 2 == 0) {
    return true;
  }
  return false;
}