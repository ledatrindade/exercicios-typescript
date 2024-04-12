export function somaDobrada(num1: number, num2: number): number {
    // Verifica se os números são iguais
    if (num1 === num2) {
        // Retorna o dobro da soma
        return (num1 + num2) * 2;
    }
    
    // Verifica se algum dos números é menor que 1
    if (num1 < 1 || num2 < 1) {
        // Retorna -1
        return -1;
    }

    // Se nenhuma das condições anteriores for verdadeira, retorna a soma dos dois números
    return num1 + num2;
}

module.exports = somaDobrada;