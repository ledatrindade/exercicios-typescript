
export function criaObjeto(dataString: string): { dia: string; mes: string; ano: string } {
    const [dia, mes, ano] = dataString.split('/');
    return { dia, mes, ano };
}
module.exports = criaObjeto;