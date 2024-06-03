export default async function obterEndereco(cep) {
    let retorno = {};
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((endereco) => {
            retorno = endereco;
            console.log(endereco);
        })
        .catch((erro) => retorno.erro = erro);
    return retorno;
}