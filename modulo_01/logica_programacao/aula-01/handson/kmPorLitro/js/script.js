/* Exercício 02*/

// pedir quilometragem inicial para o usuário;
let kmInicial = parseFloat(prompt("Digite a quilometragem inicial:"));

// pedir quilometragem na chegada ao posto de gasolina;
let kmFinal = parseFloat(prompt("Digite quilometragem ao chegar ao posto:"));

// pedir para o usuário a quantidade de litros reabastecido;
let litrosCombustivel = parseFloat(prompt("Digite a quantidade de litros reabastecidos"));

// calcular e exibir a média de quilometros por litro que o carro faz.
let kmPorLitro = (kmInicial - kmFinal)/litrosCombustivel;

// mostrar média de quilometros por litro que o carro faz.
document.getElementById("saida").innerHTML = `Este carro faz ${ kmPorLitro } km por litro`;