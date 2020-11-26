
// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 0;
console.log(converte_nota(nota));
function converte_nota(n) {
  if (n >= 0 && n <= 50 ){
    return 'F';
  }else if (n <= 60 ) {
    return 'E';
  }else if (n <= 70 ) {
    return 'D';
  }else if (n <= 80) {
    return 'C';
  }else if (n <= 90) {
    return 'B';
  }else if (n <= 100) {
    return 'A';
  }else{
    return 'Valor inválido informado!';
  }
}
