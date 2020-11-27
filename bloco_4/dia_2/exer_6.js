// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i in numbers) {
  if (numbers[i] % 2 != 0) {
    impar++;
  }
}

if (impar !=0){
  console.log(`${impar} ímpar encotrado/s `);
}else{
  console.log('Nenhum valor ímpar encontrado');
}
