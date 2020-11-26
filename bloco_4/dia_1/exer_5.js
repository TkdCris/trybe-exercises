
// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let angulo_1 = 45;
let angulo_2 = 95;
let angulo_3 = 40;

function angTriangulo(n1, n2, n3) {
  let soma = n1 + n2 + n3;
  return soma == 180? true:false;
}

let result = angTriangulo(angulo_1, angulo_2, angulo_3)
console.log(result);
