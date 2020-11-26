// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let v_custo = 10;
let v_venda = 20;
let quantidade = 1000;

function lucroUnitario(preco_custo, preco_venda) {
  let custo_total = preco_custo * 1.2;
  return preco_venda - custo_total;
}

function lucroTotal(preco_custo, preco_venda, qnt) {
  if (preco_custo <= 0 || preco_venda <= 0 || qnt <= 0){
    return console.log('Valor ou quantidade digitada inválida.')
  }
  let l_unitario = lucroUnitario(preco_custo, preco_venda);
  return l_unitario * qnt;
}

// console.log(`Lucro unitário: ${lucroUnitario(v_custo, v_venda)}`);
console.log(`Lucro total: ${lucroTotal(v_custo, v_venda,quantidade)}`);