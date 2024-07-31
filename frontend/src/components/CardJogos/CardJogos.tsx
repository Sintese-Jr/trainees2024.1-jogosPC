import React from "react";
import './styles.css';
import CardPrimary from "../CardPrimary/index.tsx";
import CardImg from "../CardImg/index.tsx";

interface CardJogosProps {
    id: string;
    ranking: number;
    imagem: string;
    nome: string;
    empresa: string;
    total_vendas: string;
    desenvolvedora: string;
    publisher: string;
    genero: string
    lancamento: string;
}

export default function CardJogos(props: CardJogosProps) {
    return (
        <div className="fundo-card">
            <CardImg imagem={`${props.imagem}`} ranking={props.ranking} nome={props.nome} />
            <div className="flex-info">
                <CardPrimary texto="TOTAL DE VENDAS" size="subtitle" variant="yellow" />
                <CardPrimary texto={props.total_vendas} size="subtitle" variant="purple" />
                <CardPrimary texto="DESENVOLVEDOR" size="subtitle" variant="yellow" />
                <CardPrimary texto={props.desenvolvedora} size="subtitle" variant="purple" />
                <CardPrimary texto="DISTRIBUIDOR" size="subtitle" variant="yellow" />
                <CardPrimary texto={props.publisher} size="subtitle" variant="purple" />
                <CardPrimary texto="GÊNEROS" size="subtitle" variant="yellow" />
                <CardPrimary texto={props.genero} size="subtitle" variant="purple" />
            </div >
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