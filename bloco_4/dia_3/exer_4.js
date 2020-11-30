// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let colunas = 7;
let linhas = Math.ceil(colunas/2);
let cont = 1;

for (i = 0; i < linhas; i++) {
  let string = '';

  for (j = 0; j < colunas; j++){
    if (j < colunas - cont) {
      string += ' ';
    }else{
      string += '*';
    }
    
  }
  if (i > 0) {
    for (c = 0; c < i; c++) {
      string += '*';
    }
  }
  cont++;

  if(colunas % 2 == 0 ) {
    string += '*';
  }

  console.log(string);
}
