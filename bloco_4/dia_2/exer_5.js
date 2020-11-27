// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i in numbers) {
  if (maior < numbers[i]) {
    maior = numbers[i];
  }
}

console.log(maior);
