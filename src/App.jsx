import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Erro, Atencao, Sucesso} from './componentes/msg'
import Login from './componentes/Login'
import CriarConta from './componentes/CriarConta'
import Contato from './componentes/contatos/Contato'
import Contatos from './componentes/contatos/Contatos'
import Endereco from './componentes/contatos/Endereco'
import ConsultarEndereco from './componentes/ConsultarEndereco'
import ListarCategorias from './componentes/refeicoes/ListarCategorias'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Erro titulo='Vish' mensagem='Deu ruim aqui viu' />
    // <Atencao mensagem='Cuidado com o que você está fazendo!' />
    // <Sucesso />
    // <Login />
    // <CriarConta />
    // <Contato nome={"Marco Pacheco"} telefone={"+55 (11) 99999-9999"} email={"marcopsle@gmail.com"} />
    // <Contatos />
    // <Endereco endereco={{cep: "25937-216", logradouro: "Rua B", bairro: "Parque Santana (Vila Inhomirim)", localidade: "Rio de Janeiro", uf: "RJ", complemento: "Casa de dois andares com muro azul e portão branco"}} />
    // <ConsultarEndereco />
    // <ListarCategorias />
  );
}

export default App
