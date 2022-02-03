let mes = parseInt(prompt("Digite o número do mês:"));
let mesAno;

switch(mes) {
    case 1:
        mesAno = "Janeiro";
        break;
    case 2:
        mesAno = "Fevereiro";
        break;
    case 3:
        mesAno = "Março";
        break;
    case 4:
        mesAno = "Abril";
        break;
    case 5: 
        mesAno = "Maio";
        break;
    case 6:
        mesAno = "Junho";
        break;
    case 7:
        mesAno = "Julho";
        break;
    case 8:
        mesAno = "Agosto";
        break;
    case 9:
        mesAno = "Setembro";
        break;
    case 10:
        mesAno = "Outubro";
        break;
    case 11:
        mesAno= "Novembro";
        break;
    case 12:
        mesAno = "Dezembro";
        break;
    default:
        mesAno = "Mês inválido!!!";
        break;
}

document.getElementById("saida").innerHTML = mesAno;