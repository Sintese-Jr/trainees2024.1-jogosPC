import React from "react";
import './styles.css';
import CardSecondary from './../CardSecondary/index.tsx';
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
            <div className="grid-info">
                <div className="grid-row">
                    <CardPrimary texto="Teste" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
                <div className="grid-row">
                    <CardPrimary texto="Teste" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
                <div className="grid-row">
                    <CardPrimary texto="Teste" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
                <div className="grid-row">
                    <CardPrimary texto="Teste" size="h6" />
                    <CardSecondary texto="Teste" size="h6" />
                </div>
            </div>
        </div>
    )
}
