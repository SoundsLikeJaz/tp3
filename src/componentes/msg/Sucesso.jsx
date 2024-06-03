const Sucesso = ({titulo = "SUCESSO", mensagem = 'Ação concluída.' }) => { 
    return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
            <p className="font-bold">{titulo}</p>
            <p>{mensagem}</p>
        </div>
    );
}

export default Sucesso;