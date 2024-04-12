function contadorDeOcorrencia(texto: string, busca: string): number {
  let count = 0;
  let index = texto.indexOf(busca);

  while (index !== -1) {
      count++;
      index = texto.indexOf(busca, index + 1);
  }
  
  return count;
}

module.exports = contadorDeOcorrencia;