
function calcularRanks(vitoriasRankeadas, derrotasDoJogo) {
    let saldoVitorias = vitoriasRankeadas - derrotasDoJogo;

    let nivel = "";

    if (vitoriasRankeadas <= 10) {
        nivel = "Ferro";
    } else if (vitoriasRankeadas <= 20) {
        nivel = "Bronze";
    } else if (vitoriasRankeadas <= 50) {
        nivel = "Prata";
    } else if (vitoriasRankeadas <= 80) {
        nivel = "Ouro";
    } else if (vitoriasRankeadas <= 90) {
        nivel = "Diamante";
    } else if (vitoriasRankeadas <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel);
}

calcularRanks(50, 20);
