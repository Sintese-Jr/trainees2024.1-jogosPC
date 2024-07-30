import './App.css';
import PaginaCatalogo from './components/PaginaCatalogo/index.tsx';
import BarraPesquisa from './components/BarraPesquisa/index.tsx';
import TituloSecao from './components/TituloSecao/index.tsx';
import CardJogos from './components/CardJogos/CardJogos.tsx';
import SecaoCatalogo from './components/SecaoCatalogo/index.tsx';
import { JogosType } from './types/jogos.tsx';
import { useEffect, useState } from 'react';
import React from 'react';
//import { ArrowDownOutlined } from '@ant-design/icons';

function App() {
  const [jogos, setJogos] = useState<JogosType[] | null>(null);
  const [listaAtual, setListaAtual] = useState<JogosType[] | null>(null);
  const [valorDaBusca, setValorDaBusca] = useState<string>();

  function handleSetValorDaBusca(event: React.ChangeEvent<HTMLInputElement>) {
    setValorDaBusca(event.target.value)
  }

  useEffect(() => {
    console.log(valorDaBusca)
  }, [valorDaBusca])

  useEffect(() => {
    console.log(jogos)
  }, [jogos]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then(response => response.json())
      .then(data => {
        setJogos(data);
      });
  }, []);

  return (
    <div className="App">
      <PaginaCatalogo>
        <TituloSecao titulo="RANKING GERAL" />
        <BarraPesquisa setPesquisa={handleSetValorDaBusca} />
        <SecaoCatalogo>
          {
            jogos?.map((jogo_atual, index) => {
              return (
                <CardJogos
                  key={jogo_atual.id}
                  id={jogo_atual.id}
                  imagem={jogo_atual.id}
                  nome={jogo_atual.game}
                  empresa={jogo_atual.developer}
                  desenvolvedora={jogo_atual.developer}
                  lancamento={jogo_atual.release_date}
                  publisher={jogo_atual.publisher}
                  genero={jogo_atual.genre}
                  ranking={index + 1}
                  total_vendas={jogo_atual.total_copies_sold}
                />
              )
            })
          }
        </SecaoCatalogo>
        {
          //<img src={ArrowDownOutlined} /> 
        }
      </PaginaCatalogo>
    </div>
  );
}

export default App;
