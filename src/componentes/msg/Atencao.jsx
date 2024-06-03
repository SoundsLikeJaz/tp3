const Atencao = ({titulo = "ATENÇÃO", mensagem = "Algo estranho aconteceu aqui..."}) => {
    return (
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">{titulo}</p>
            <p>{mensagem}</p>
        </div>
    );
}

export default Atencao;