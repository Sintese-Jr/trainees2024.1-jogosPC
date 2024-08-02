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
import axios from 'axios';
import { Button, Modal, Box, Typography } from '@mui/material';

//import { ArrowDownOutlined } from '@ant-design/icons';
const fetchJogos = async () => {
  try {
    const response = await axios.get("http://localhost:3001");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    return [];
  }
};

const fetchImagem = async (game) => {
  try {
    const response = await axios.get(`http://localhost:3001/imagem/${game}`);
    return response.data.imagem;
  } catch (error) {
    console.error(`Erro ao buscar imagem para o jogo ${game}:`, error);
    return null;
  }
};

const fetchJogosComImagens = async (jogos) => {
  return Promise.all(
    jogos.map(async (jogo) => {
      const imagem = await fetchImagem(jogo.game);
      return { ...jogo, imagem };
    })
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
};

function App() {
  const [jogos, setJogos] = useState<JogosType[] | null>(null);
  const [cardSelected, setCardSelected] = useState<number | null>(null);
  const [listaAtual, setListaAtual] = useState<JogosType[] | null>(null);
  const [valorDaBusca, setValorDaBusca] = useState<string>();
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(100);
  const [open, setOpen] = React.useState(false);
  const handleModal = () => setOpen(!open);

  function handleCardSelected(id: number) {
    setCardSelected(id);
    if (!open) {
      handleModal();
    }
  }

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

  // useEffect(() => {
  //   console.log(valorDaBusca)
  // }, [valorDaBusca])

  useEffect(() => {
    console.log(jogos)
  }, [jogos]);

  // useEffect(() => {
  //   console.log(paginaAtual)
  // }, [paginaAtual])


  useEffect(() => {
    const getJogosComImagens = async () => {
      const jogosData = await fetchJogos();
      const jogosComImagens = await fetchJogosComImagens(jogosData);
      setJogos(jogosComImagens);
    };
    getJogosComImagens();
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
                  desenvolvedora={jogo_atual.developer}
                  lancamento={jogo_atual.release_date}
                  publisher={jogo_atual.publisher}
                  genero={jogo_atual.genre}
                  ranking={index + 1}
                  total_vendas={jogo_atual.total_copies_sold}
                  handleOpenCard={handleCardSelected}
                  cardOpen={false}
                />
              )
            })
          }

          <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {
                jogos?.filter((jogo) => jogo.id === cardSelected).map((jogo) => {
                  return (
                    CardJogos({
                      id: jogo.id,
                      imagem: jogo.imagem,
                      nome: jogo.game,
                      desenvolvedora: jogo.developer,
                      lancamento: jogo.release_date,
                      publisher: jogo.publisher,
                      genero: jogo.genre,
                      ranking: 1,
                      total_vendas: jogo.total_copies_sold,
                      handleOpenCard: handleCardSelected,
                      cardOpen: open
                    })
                  )
                })
              }
            </Box>
          </Modal>
        </SecaoCatalogo>

        <NavegacaoPaginas paginaAtual={paginaAtual} totalPaginas={totalPaginas} setPagina={handleSetPaginaAtual} />
      </PaginaCatalogo>
    </div >
  );
}

export default App;