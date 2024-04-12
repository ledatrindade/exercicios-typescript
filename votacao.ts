
function apuraVotacao(votos: number[]): string {
    // Inicializa contadores para cada candidato
    let contagem1 = 0;
    let contagem2 = 0;
    let contagem3 = 0;

    // Itera sobre os votos e incrementa os contadores correspondentes
    for (let voto of votos) {
        switch (voto) {
            case 1:
                contagem1++;
                break;
            case 2:
                contagem2++;
                break;
            case 3:
                contagem3++;
                break;
            default:
                console.log("Voto inválido: ", voto);
        }
    }  
    
    // Verifica quem teve mais votos
    if (contagem1 > contagem2 && contagem1 > contagem3)
        return 'Vencedor: 1';
    else if (contagem2 > contagem1 && contagem2 > contagem3)
        return 'Vencedor: 2';
    else if (contagem3 > contagem1 && contagem3 > contagem2)
        return 'Vencedor: 3';
    else
        return 'Empate';
}

module.exports = apuraVotacao;