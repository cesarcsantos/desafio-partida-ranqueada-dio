// Calculadora para Partidas ankeadas

let resultadoDePartidas = calcular(91, 31)
let level

switch(true) {
    case resultadoDePartidas <= 10:
        level = "Ferro";
        break;
    case resultadoDePartidas >= 11 && resultadoDePartidas <= 20:
        level = "Bronze";
        break;
    case resultadoDePartidas >= 21 && resultadoDePartidas <= 50:
        level = "Prata";
        break;
    case resultadoDePartidas >= 51 && resultadoDePartidas <= 80:
        level = "Ouro";
        break;
    case resultadoDePartidas >= 81 && resultadoDePartidas <= 90:
        level = "Diamante";
        break;
    case resultadoDePartidas >= 91 && resultadoDePartidas <= 100:
        level = "Lendário";
        break;
    case resultadoDePartidas >= 101:
        level = "Imortal";
        break;
    default:
        level = "Nível não catalogado!";
}

console.log("O jogador possui um saldo de", resultadoDePartidas, "vitórias e está no nível de", level)

function calcular(vitoria, derrota){
    let balanceamento = vitoria - derrota
    return balanceamento
}