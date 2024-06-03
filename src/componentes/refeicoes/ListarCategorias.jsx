import { useEffect, useState } from "react";
import { listarCategorias } from "../../infra/refeicoes";

const ListarCategorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function carregarCategorias() {
            let cats = await listarCategorias();
            setCategorias(cats);
        }
        carregarCategorias();
    }, []);

    return (
        <div>
            <h1>Categorias</h1>
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={categoria.idCategory}>
                        <div className="cartao">
                            <h2>{categoria.strCategory}</h2>
                            <p>{categoria.strCategoryDescription}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarCategorias;