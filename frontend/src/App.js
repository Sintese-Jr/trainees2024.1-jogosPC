import './App.css';
import { useEffect, useState } from 'react';
import PaginaCatalogo from './components/PaginaCatalogo/index.tsx';
import TituloSecao from './components/TituloSecao/index.tsx';
import BarraPesquisa from './components/BarraPesquisa/index.tsx';
import { ListarJogos } from './api/database/db.js';
import Jogos from './tests/jogos.json';
import CardJogos from './components/CardJogos/CardJogos.tsx';

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
        {
          jogos.map((jogo_atual)=> {
            return (
              <div className='catalogo' key={jogo_atual.id}> 
                <CardJogos 
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
              </div>
            )
          })
        }
      </PaginaCatalogo>

      

      
    
    </div>
  );
}

export default App;
