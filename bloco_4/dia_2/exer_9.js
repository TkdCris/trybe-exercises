// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];

for (let i = 1; i <= 25; i++) {
  array.push(i);
}

for (i in array) {
  console.log(array[i]/2);
}
