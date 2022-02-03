let nota1 = parseFloat(prompt("Entre com a primeira nota:"));
let nota2 = parseFloat(prompt("Entre com a segunda nota:"));
let nota3 = parseFloat(prompt("Entre com a terceira nota:"));

let media = (nota1 + nota2 + nota3)/3;

if(media >= 7) {
    alert(`Aprovado com a média ${ media }`);
} else if(media < 7 && media >= 4) {
    alert(`Em prova final com a média ${ media }`);
} else {
    alert(`Reprovado com a média ${ media }`);
}