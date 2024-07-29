import './App.css';
import { useEffect, useState } from 'react';
import PaginaCatalogo from './components/PaginaCatalogo/index.tsx';
import TituloSecao from './components/TituloSecao/index.tsx';
import Jogos from './tests/jogos.json';
import CardJogos from './components/CardJogos/CardJogos.tsx';
import SecaoCatalogo from './components/SecaoCatalogo/index.tsx';
// import { DownOutlined } from "@ant-design/icons"

function App() {
  const [jogos, setJogos] = useState(Jogos);

  useEffect(() => {
    setJogos(Jogos);
  }, []);

  useEffect(() => {
    console.log(jogos);
  }, [jogos]);

  return (
    <div className="App">
      <PaginaCatalogo>
        <TituloSecao titulo="RANKING GERAL" />
          <SecaoCatalogo>
            {
              jogos.map((jogo_atual)=> {
                return (
                    <CardJogos 
                      key={jogo_atual.id}
                      id={jogo_atual.id}
                      imagem={jogo_atual.imagem}
                      nome={jogo_atual.nome}
                      empresa={jogo_atual.empresa}
                      desenvolvedora={jogo_atual.desenvolvedora}
                      lancamento={jogo_atual.data_lancamento}
                      publisher={jogo_atual.publisher}
                      genero={jogo_atual.generos}
                      ranking={jogo_atual.ranking}
                    />
                )
              })
            }
          </SecaoCatalogo>
          {/* <DownOutlined /> */}
      </PaginaCatalogo>

      

      
    
    </div>
  );
}

export default App;
