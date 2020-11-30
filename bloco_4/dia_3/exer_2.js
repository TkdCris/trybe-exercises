// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let tamanho = 5;
let string = '';
for (let i = 0; i < tamanho; i++) {
  for (let j = -1; j < i; j++) {
    string += '*';
    j += i;
  }
  console.log(string);
}