
// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let num = 0;

function statusNum(n) {
  if (num > 0) {
    return console.log("positive");
  }else if (num < 0) {
    return console.log("negative");
  }else{
    return console.log("zero");
  }
}

statusNum(num);

console.log('');