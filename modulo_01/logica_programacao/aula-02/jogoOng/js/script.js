// pessoa até 11 anos não pode jogar
// pessoa com 12 anos, somente com permissão dos pais
// acima de 12 anos, pode jogar

let idade = parseInt(prompt("Digite a sua idade:"));
if(idade < 12) {
    alert("Sua idade não permite que você jogue!");
} else if(idade == 12) {
    alert("Você pode jogar com a permissão dos pais!");
}else {
    alert("Você pode jogar!");
}