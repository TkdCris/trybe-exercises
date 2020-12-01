// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let qnt = array[0].length;
  let nome = array[0];
  for (let i = 1; i < array.length; i++) {
    if (qnt < array[i].length) {
      qnt = array[i].length;
      nome = array[i];
    }
  }
  return nome;
}

console.log(maiorNome(nomes));
