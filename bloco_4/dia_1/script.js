function soma (a,b) {
  return a + b;
}

function subtracao (a,b) {
  return a - b;
} 

function multiplicacao (a,b) {
  return a * b;
}

function divisao (a,b) {
  return a / b;
}

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
