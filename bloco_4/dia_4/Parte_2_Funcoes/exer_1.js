// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome("arara") ;
// Retorno esperado: true
// verificaPalindrome("desenvolvimento") ;
// Retorno esperado: false


function verificarPalindromo(string) {
  let frase = string.toLowerCase().split('');
  console.log(frase,' É um palíndromo? ');
  let cont = frase.length - 1;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != frase[cont]) {
      return false;
    }
    cont--;
  }
  return true;
}

console.log(verificarPalindromo('mebaabem'));
