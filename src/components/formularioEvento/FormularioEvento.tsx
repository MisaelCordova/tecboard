import { Button } from "../button/Button";
import { Input } from "../input";
import type { ICardEvento } from "../interfaces";
import { Select } from "../select";
import "./styles.css"

export default function FormularioEvento(props:{aoSubmter:(evento:ICardEvento) => void}) {
  function submeterFormulario (formData:FormData){
    
    const evento:ICardEvento = {
        titulo: formData.get("nomeEvento") as string,
        imagem: formData.get("imagemEvento") as string,
        descricao: "Mulheres no front" as string, 
        data: new Date(formData.get("dataEvento")as string),
        tema: formData.get("temaEvento") as string
    }
   props.aoSubmter(evento)
  }

  return (
    <form className="form-evento" action={submeterFormulario}>
      <h4>Preencha para criar um evento:</h4>
      <fieldset>
        <Input name="nomeEvento" htmlFor="nomeEvento" label="Qual o nome do evento?" type="string" placeholder="Summer dev hits"/>
        <Input name="imagemEvento" htmlFor="imagemEvento" label="Imagem do Evento" type="string" placeholder="https://"/>
        <Input name="dataEvento" htmlFor="dataEvento" label="Data do evento" type="date"/>
        <Select name="temaEvento"  htmlFor="temaEvento"/>
        <Button/>
      </fieldset>
    </form>
  );
}