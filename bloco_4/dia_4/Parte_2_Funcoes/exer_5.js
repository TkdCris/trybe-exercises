// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .


let num = [2, 3, 2, 5, 8, 2, 3];

function repeatMore(array) {
  let numRepeat;
  let qntRepeat = 0;
  for (let i = 0; i < array.length; i++) {
    let cont1 = 0;
    let cont2 = 0;
    let numTemp1;
    let numTemp2;
    let repetiu = false;
    for (let j = i + 1; j < array.length; j++ ) {
      if (repetiu == false){
        if (array[i] == array[j]) {
          repetiu = true;
          cont1 = 2;
          numTemp1 = array[j];
          array.splice(j,1);
          j--;
        }
      }else{
        if (array[i] == array[j]) {
          cont2++;
          numTemp2 = array[j]
          array.splice(j,1);
          j--;
        }
      }
      if (numTemp1 == numTemp2 && qntRepeat < cont1 + cont2) {
        qntRepeat = cont1 + cont2;
        numRepeat = numTemp1;
      }
    }
    console.log(`O numero ${numRepeat} repetiu ${qntRepeat} vezes`);
    console.log(num);
  }
  console.log(`O número ${numRepeat} repetiu ${qntRepeat} vezez e foi o que mais repetiu`)
}

repeatMore(num);