import React from "react";
import './styles.css';
import CardPrimary from "../CardPrimary/index.tsx";
import CardImg from "../CardImg/index.tsx";
import SetasCard from "../SetasCard/index.tsx"

interface CardJogosProps {
    id: number;
    ranking: number;
    imagem: string;
    nome: string;
    total_vendas: string;
    desenvolvedora: string[];
    publisher: string[];
    genero: string[]
    lancamento: string;
    handleOpenCard?: (index: number) => void;
    cardOpen: boolean;
}

export default function CardJogos(props: CardJogosProps) {
    return (
        <div className={`${props.cardOpen ? 'fundo-card-open' : 'fundo-card-close'}`} onClick={() => props.handleOpenCard && props.handleOpenCard(props.id)}>
            <CardImg imagem={`${props.imagem}`} ranking={props.ranking} nome={props.nome} />
            {
                props.cardOpen && (

                    <div className="flex-info">
                        <div className="flex-title">
                            <SetasCard>
                                <CardPrimary texto="TOTAL DE VENDAS" size="subtitle" variant="yellow" />
                            </SetasCard>
                        </div>
                        <div className="info-list">
                            <CardPrimary texto={props.total_vendas} size="subtitle" variant="purple" />
                        </div>
                        <SetasCard>
                            <CardPrimary texto="DESENVOLVEDOR" size="subtitle" variant="yellow" />
                        </SetasCard>
                        <div className="info-list">
                            {props.desenvolvedora.map((dev, index) => {
                                return (
                                    <CardPrimary texto={dev} size="subtitle" variant="purple" key={index} />
                                )
                            })}
                        </div>
                        <SetasCard>
                            <CardPrimary texto="DISTRIBUIDOR" size="subtitle" variant="yellow" />
                        </SetasCard>
                        <div className="info-list">
                            {props.publisher.map((pub, index) => {
                                return (
                                    <CardPrimary texto={pub} size="subtitle" variant="purple" key={index} />
                                )
                            })}
                        </div>
                        <SetasCard>
                            <CardPrimary texto="GÊNEROS" size="subtitle" variant="yellow" />
                        </SetasCard>
                        <div className="info-list">
                            {props.genero.map((gen, index) => {
                                return (
                                    <CardPrimary texto={gen} size="subtitle" variant="purple" key={index} />
                                )
                            })}
                        </div>
                        <div className="info-list-date">
                            <CardPrimary texto={props.lancamento} size="h6" variant="date" />
                        </div>
                    </div >
                )}
        </div >

    )
}

{/* <div className="grid-info">
                <div className="grid-row">
                    <CardPrimary texto="TOTAL DE VENDAS" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
                <div className="grid-row">
                    <CardPrimary texto="DESENVOLVEDOR" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
                <div className="grid-row">
                    <CardPrimary texto="DISTRIBUIDOR" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
                <div className="grid-row">
                    <CardPrimary texto="GÊNEROS" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
            </div> 
                */}