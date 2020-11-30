// 3- Agora inverta o lado do triângulo. Por exemplo:

let colunas = 5;
let cont = 1;

for (i = 0; i < colunas; i++) {
  let string = '';
  for (j = 0; j < colunas; j++) {
    if ( j < colunas - cont) {
      string += ' ';
    }else{
      string += '*';
    }
  }
  cont++;
  console.log(string);
}