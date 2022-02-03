/* ler total de um venda e conceda 20% caso o valor da compra
seja superior a R$ 1000 ou se o cumpom de desconto for DESCONTO20   
*/

let valorCompra = parseFloat(prompt("Valor da compra:"));
let cumpom = prompt("Cupom desconto");
let valorFinal;

if(valorCompra > 1000 || cupom == "DESCONTO20") {
    valorFinal = valorCompra - (valorCompra * 0.2);
} else {
    valorFinal = valorCompra;
}

alert(`Valor final da compra é: R$ ${valorFinal}`);