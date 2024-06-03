import { faker } from '@faker-js/faker/locale/pt_BR';

const Contatos = () => {

    const contatos = new Array(10).fill().map((value) => {
        let contato = new Object();

        contato.id = faker.string.uuid();
        contato.nome = faker.person.fullName();
        contato.email = faker.internet.email(contato.nome);
        contato.telefone = faker.phone.number();
        return contato;
    });

    return (
        <div>
            <h1>Contatos</h1>
            <ul>
                {contatos.map((contato) => {
                    return (
                        <li>
                            <div key={contato.id} className='cartao'>
                                <h3>{contato.nome}</h3>
                                <p>Telefone: {contato.telefone}</p>
                                <p>Email: {contato.email}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Contatos;