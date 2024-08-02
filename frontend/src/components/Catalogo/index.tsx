import { Modal, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { JogosType } from "../../types/jogos";
import BarraPesquisa from "../BarraPesquisa/index.tsx";
import CardJogos from "../CardJogos/CardJogos.tsx";
import NavegacaoPaginas from "../NavegacaoPaginas/index.tsx";
import PaginaCatalogo from "../PaginaCatalogo/index.tsx";
import SecaoCatalogo from "../SecaoCatalogo/index.tsx";
import TituloSecao from "../TituloSecao/index.tsx";
import api from "../../hooks/jogos.tsx";

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

export default function Catalogo() {
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

    // useEffect(() => {
    //     console.log(jogos)
    // }, [jogos]);

    // useEffect(() => {
    //   console.log(paginaAtual)
    // }, [paginaAtual])


    useEffect(() => {
        // const fetchGames = async () => {
        //     const jogosData = await api.fetchGames(1);
        //     setJogos(jogosData);
        // };

        // fetchGames();
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
                                    imagem={jogo_atual.background}
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
                                            imagem: jogo.background,
                                            nome: jogo.game,
                                            desenvolvedora: jogo.developer,
                                            lancamento: jogo.release_date,
                                            publisher: jogo.publisher,
                                            genero: jogo.genre,
                                            ranking: jogo.id,
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
