// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let colunas = 17;
let linhas = Math.ceil(colunas/2);
let cont = 2;
for (i = 0; i < linhas; i++) {
  let string = '';
  for (j = 0; j < colunas; j++) {
    if (i == 0 || i == linhas - 1){  // Linha inicio e fim preenchidas
      if ((j == Math.ceil(colunas / 2) - 1) && i == 0 || i == linhas - 1){
        string += '*';
      }else{
        string += ' ';
      }
    }else if((j == Math.ceil(colunas / 2) - cont + 1) || (j == Math.ceil(colunas / 2) + cont - 3)){ // Tentando preencher as linhas do corpo
      string += '*';
    }else{
      string += ' ';
    }
  }
  cont += 1;
  console.log(string);
}