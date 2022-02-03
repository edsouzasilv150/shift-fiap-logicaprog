//entrar com o valor de doação em dolar:
let doacao = parseFloat(prompt("Entre com o valor da doação:"));
//converter de dolar para reais.
let reais = (doacao) * 5.37;

alert(`O valor da doação convertida para reais é: R$ ${ reais }`)

document.getElementById("saida").innerHTML = `O valor da doação convertida para reais é: R$ ${ reais }`;