import type { ISelectProps } from "../interfaces";
import "./styles.css";

export function Select(props:ISelectProps) {
  return (
    <div>
    <label htmlFor={props.htmlFor}>Tema do Evento</label>
      {/* se der um map defaultValue = '' vai deixar a opção padrao */}
      <select name={props.name}>
        <option value="">Selecione uma opção</option>
        <option value="Ai">Ai</option>
        <option value="frontend">Front-end</option>
        <option value="backend">Back-end</option>
        <option value="devops">DevOps</option>
        <option value="datascience">DataScience</option>
        <option value="cloud">Cloud</option>
      </select>
    </div>
  );
}
