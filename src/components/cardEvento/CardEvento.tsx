
import type { ICardEvento } from "../interfaces";
import "./styles.css"


export const CardEvento = (props:ICardEvento) => {
    return (
        <article className="card">
        <img className='imagemCard'src={props.imagem}></img>
        <div className="corpo">
            <div className="tag">{props.tema} </div>
            <p> {props.data.toLocaleDateString("pt-BR")}</p>
            <h3 className="titulo">{props.titulo}</h3>
            <p>{props.descricao}</p>
        </div>
        
      </article>
    )
}