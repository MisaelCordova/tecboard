import type { IInputProps } from "../interfaces";
import "./styles.css"
export const Input = (props:IInputProps) => {
  return (
    <div className='agrupamentoInput'>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input name={props.name} placeholder={props.placeholder} id={props.id} type={props.type} />
    </div>
  );
};
