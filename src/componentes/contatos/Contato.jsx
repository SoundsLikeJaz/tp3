import { faker } from '@faker-js/faker/locale/pt_BR';

const Contato = ({nome, telefone, email}) => {

    let contato = {
        nome: nome,
        phone: telefone,
        email: email
    }

    return (
        <div className='cartao'>
            <h2>Contato</h2>
            <p>Nome: {contato.nome}</p>
            <p>Telefone: {contato.phone}</p>
            <p>Email: {contato.email}</p>
        </div>
    );

}

export default Contato;