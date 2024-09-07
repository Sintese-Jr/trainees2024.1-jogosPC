import { Modal, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { JogosType } from "../../types/jogos.tsx";
import BarraPesquisa from "../BarraPesquisa/index.tsx";
import CardJogos from "../CardJogos/CardJogos.tsx";
import NavegacaoPaginas from "../NavegacaoPaginas/index.tsx";
import PaginaCatalogo from "../PaginaCatalogo/index.tsx";
import SecaoCatalogo from "../SecaoCatalogo/index.tsx";
import TituloSecao from "../TituloSecao/index.tsx";
import api from "../../hooks/jogos.tsx";
import { TailSpin } from 'react-loading-icons'
import './styles.css';

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
    const [valorDaBusca, setValorDaBusca] = useState<string | null>(null);
    const [paginaAtual, setPaginaAtual] = useState<number>(1);
    const [totalPaginas, setTotalPaginas] = useState<number>(12);
    const [navegationActive, setNavegationActive] = useState<boolean>(true);
    const [erroBusca, setErroBusca] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);
    const handleModal = () => setOpen(!open);

    const fetchGames = async () => {
        const jogosData = await api.fetchGames(paginaAtual);
        setJogos(jogosData);
    };

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
            if (event > 12) {
                setPaginaAtual(12);
                return;
            }
            setPaginaAtual(event);
            return;
        }

        if (Number(event.target.value) < 0) {
            setPaginaAtual(1)
            return
        }

        if (Number(event.target.value) > 12) {
            setPaginaAtual(12)
            return
        }
        setPaginaAtual(Number(event.target.value))
    }

    useEffect(() => {
        if (jogos === null ||
            jogos === undefined ||
            jogos.length === 0 ||
            jogos.length === 0 && valorDaBusca !== null) {
            setNavegationActive(true);
            setTimeout(() => {
                fetchGames();
            }, 500);
        }
    }, [jogos])

    useEffect(() => {
        if (valorDaBusca === undefined || valorDaBusca === "" || valorDaBusca === null) {
            setNavegationActive(true);
            setErroBusca(false);
            fetchGames();
            return;
        }
        const fetchGamesBySearch = async () => {
            const jogosData = await api.fetchGamesBySearch(valorDaBusca);
            setJogos(jogosData);
            if (jogosData.length === 0) {
                setErroBusca(true);
            }
        };
        setNavegationActive(false);
        fetchGamesBySearch();
    }, [valorDaBusca]);

    useEffect(() => {
        fetchGames();
    }, [paginaAtual]);

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className="App" id="catalogo">
            <PaginaCatalogo>
                <TituloSecao titulo="RANKING GERAL" />
                <BarraPesquisa setPesquisa={handleSetValorDaBusca} />

                <SecaoCatalogo>
                    {
                        jogos && !erroBusca ? jogos?.map((jogo_atual) => {
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
                                    ranking={jogo_atual.id}
                                    total_vendas={jogo_atual.total_copies_sold}
                                    handleOpenCard={handleCardSelected}
                                    cardOpen={false}
                                />
                            )
                        })
                            :
                            erroBusca ?
                                <>
                                    <h5 className="errorGame">Nenhum Jogo Encontrado :( </h5>
                                </>
                                :
                                <TailSpin stroke="#F7C22F" className="loading" />
                    }

                    <Modal
                        open={open}
                        onClose={handleModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="modal"
                    >
                        <Box sx={style} >
                            {
                                jogos && jogos?.filter((jogo) => jogo.id === cardSelected).map((jogo) => {
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
                {
                    (navegationActive && !erroBusca) && (
                        <NavegacaoPaginas
                            paginaAtual={paginaAtual}
                            totalPaginas={totalPaginas}
                            setPagina={handleSetPaginaAtual}
                        />
                    )
                }
            </PaginaCatalogo>
        </div >
    );
}
