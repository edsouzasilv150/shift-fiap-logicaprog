let AC = parseFloat(prompt("Entre com a primeira nota:"));
let AG = parseFloat(prompt("Entre com a segunda nota:"));
let AT = parseFloat(prompt("Entre com a terceira nota:"));

media = (AC * 0.20) + (AG * 0.10 )+ (AT * 0.70);

alert(`A média do aluno é: ${ media }`);

document.getElementById("saida").innerHTML = `A média do aluno é: ${ media }`;