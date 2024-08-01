import './App.css';
import PaginaCatalogo from './components/PaginaCatalogo/index.tsx';
import BarraPesquisa from './components/BarraPesquisa/index.tsx';
import TituloSecao from './components/TituloSecao/index.tsx';
import CardJogos from './components/CardJogos/CardJogos.tsx';
import SecaoCatalogo from './components/SecaoCatalogo/index.tsx';
import NavegacaoPaginas from './components/NavegacaoPaginas/index.tsx';
import { JogosType } from './types/jogos.tsx';
import { useEffect, useState } from 'react';
import React from 'react';
//import { ArrowDownOutlined } from '@ant-design/icons';

function App() {
  const [jogos, setJogos] = useState<JogosType[] | null>(null);
  const [listaAtual, setListaAtual] = useState<JogosType[] | null>(null);
  const [valorDaBusca, setValorDaBusca] = useState<string>();
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(100);

  function handleSetValorDaBusca(event: React.ChangeEvent<HTMLInputElement>) {
    setValorDaBusca(event.target.value)
  }

  function handleSetPaginaAtual(event: React.ChangeEvent<HTMLInputElement> | number) {
    if (typeof event === 'number') {
      if (event < 1) {
        setPaginaAtual(1);
        return;
      }
      if (event > 100) {
        setPaginaAtual(100);
        return;
      }
      setPaginaAtual(event);
      return;
    }

    if (Number(event.target.value) < 0) {
      setPaginaAtual(1)
      return
    }

    if (Number(event.target.value) > 100) {
      setPaginaAtual(100)
      return
    }
    setPaginaAtual(Number(event.target.value))
  }

  useEffect(() => {
    console.log(valorDaBusca)
  }, [valorDaBusca])

  useEffect(() => {
    console.log(jogos)
  }, [jogos]);

  useEffect(() => {
    console.log(paginaAtual)
  }, [paginaAtual])

  useEffect(() => {
    fetch("http://localhost:3001")
      .then(response => response.json())
      .then(data => {
        setJogos(data);
      });
    // .then(async data => {
    //   // Supondo que cada jogo tem um id e que a URL para a imagem é algo como `http://localhost:3001/imagem/{id}`
    //   const jogosComImagens = await Promise.all(data.map(async (jogo: JogosType) => {
    //     const imagemResponse = await fetch(`http://localhost:3001/imagem/${jogo.game}`);
    //     return { ...jogo, imagem: imagemResponse.url };
    //   }));
    //   setJogos(jogosComImagens);
    // });
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
                  imagem={jogo_atual.imagem}
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

        <NavegacaoPaginas paginaAtual={paginaAtual} totalPaginas={totalPaginas} setPagina={handleSetPaginaAtual} />
      </PaginaCatalogo>
    </div>
  );
}

export default App;
