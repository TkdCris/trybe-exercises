// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição
function soma (a,b) {
  return a + b;
}

// Subtração
function subtracao (a,b) {
  return a - b;
} 

// Multiplicação
function multiplicacao (a,b) {
  return a * b;
}

// Divisão
function divisao (a,b) {
  return a / b;
}

// Módulo
function modulo (a,b) {
  return a % b;
}

let a = 12;
let b = 5;

console.log(`A soma de ${a} + ${b} = ${soma(a,b)}`);
console.log(`A subtração de ${a} - ${b} = ${subtracao(a,b)}`);
console.log(`A multiplicação de ${a} * ${b} = ${multiplicacao(a,b)}`);
console.log(`A divisão de ${a} / ${b} / ${divisao(a,b)}`);
console.log(`O módulo de ${a} % ${b} = ${modulo(a,b)}`);

console.log('-----------');