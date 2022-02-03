let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let media = (nota1 + nota2) / 2;
let aulasDadas = parseInt(prompt("Digite a qtde de aulas dadas:"));
let assistidas = parseInt(prompt("Digite a qtde de aulas assistidas:"));
let freqAulas = (assistidas / aulasDadas) * 100;

if(media >= 7 && freqAulas >= 75) {
    document.getElementById("situacao").innerHTML = 
    `Aprovado com a média ${media} e frenquência de ${freqAulas}%`;
} else {
    document.getElementById("situacao").innerHTML =
    `Retido com a média ${media} e frequência de ${freqAulas}%`;
}