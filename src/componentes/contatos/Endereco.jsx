const Endereco = ({ endereco }) => {
    return (
        <div className="cartao">
            <h2>Endereço:</h2>
            <p>CEP: {endereco.cep}</p>
            <p>Logradouro: {endereco.logradouro}</p>
            {
                endereco.complemento &&
                <p>Complemento: {endereco.complemento}</p>
            }
            <p>Bairro: {endereco.bairro}</p>
            <p>Localidade: {endereco.localidade}</p>
            <p>UF: {endereco.uf}</p>
        </div>
    );
}

export default Endereco;