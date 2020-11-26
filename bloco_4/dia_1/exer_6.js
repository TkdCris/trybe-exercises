
// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

//Informações sobre os movimentos das peças estraídas do site https://www.ludijogos.com/multiplayer/xadrez/regras/
const movXadrex = [
  ['rei','O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez'],
  ['rainha','A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças'],
  ['bispo','O bispo move-se ao longo da diagonal. Não pode pular outras peças'],
  ['cavalo','É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa'],
  ['torre','O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo'],
  ['peao','O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.']
];

let p = 'Rainha';
function mov_xadrex (p) {
  for (let i in movXadrex) {
    if (p.toLowerCase() == movXadrex[i][0]){
      return console.log(movXadrex[i][1])
    }
  }
  return console.log('Verifique se o nome está correto e tente novamente.')
}

mov_xadrex(p);

console.log('');