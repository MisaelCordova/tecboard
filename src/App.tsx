import banner from "./assets/banner.png";
import logo from "./assets/logo.png";
import "./App.css";

import FormularioEvento from "./components/formularioEvento/FormularioEvento";

import type { ICardEvento, Itemas } from "./components/interfaces";
import { useState } from "react";
import { CardEvento } from "./components/cardEvento";


function App() {
  const [temas, setTemas] = useState<Itemas[]>([]);

  const [eventosAdicionados, setEventosAdicionados] = useState<ICardEvento[]>(
    [],
  );

  function criarEvento(evento: ICardEvento) {

    if (temas && !temas?.some((t) => t.nome == evento.tema)) {
      setTemas([...temas, { id: 0, nome: evento.tema }]);
      setEventosAdicionados([...eventosAdicionados, evento]);
      return;
    }

    setEventosAdicionados([...eventosAdicionados, evento]);
  }

  return (
    <>
      <header>
        <img src={logo} alt="tecboard logo" />
      </header>
      <main>
        <section className="home">
          <img src={banner}  alt="garota com oculos de realidade virtual" />
        </section>
        <section className="cadastro">
          <FormularioEvento aoSubmter={criarEvento} />
        </section>
        <section className="secaoCards">
          {temas.map((t) => (
            <div className="tituloAgrupamento">
              <h2>{t.nome}</h2>
              <div className="eventos">
                {eventosAdicionados
                  .filter((evento) => {
                    return evento.tema === t.nome;
                  })
                  .map((e, i) => (
                    <CardEvento
                      key={i}
                      data={e.data}
                      descricao={e.descricao}
                      imagem={e.imagem}
                      tema={e.tema}
                      titulo={e.titulo}
                    />
                  ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <img src={logo} alt="tecboard logo" />
        <p>Desenvolvido por Misael, design criado pela alura. Projeto fictício sem fins comerciais.</p>
      </footer>
    </>
  );
}

export default App;
