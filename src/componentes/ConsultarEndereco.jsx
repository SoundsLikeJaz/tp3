import { useState } from "react";
import obterEndereco from "../infra/enderecos";
import Endereco from "./contatos/Endereco";

export default function ConsultarEndereco() {
    const [endereco, setEndereco] = useState({});

    async function handleClick(event) {
        let cep = document.getElementById("cep").value;
        if (cep.length === 8) {
            let endObtido = await obterEndereco(cep);
            console.log(endObtido.cep);
            setEndereco(endObtido);
        }
    }

    return (
        <div>
            Digite o CEP: <input type="text" id="cep" size={8} style={{border: "1px solid black"}} />
            <input type="button" value={"Consultar"} style={{background: "darkGray", marginLeft: "5mm"}} onClick={handleClick} />
            <p>{endereco.cep}</p>
            {endereco.cep && (
                <Endereco endereco={endereco} />
            )}
            {endereco.erro && (
                <div style={{ color: "red", fontFamily: "sans-serif" }}>
                    CEP Inválido
                </div>
            )}
        </div>
    );
}
