import React from "react";
import CardPrimary from "../CardPrimary/index.tsx";
import "./styles.css";

interface CardTop3Props {
    ranking: number;
    imagem: string;
    nome: string;
    vendas: string;
    data: string;
    className?: string;
    variant: "top-1" | "top-2" | "top-3";
}

export default function CardTop3(props: CardTop3Props) {
    return (
        <div className={`podio-${props.variant} podio`} id="top3">
            <div className="card-top3">
                <div className={`${props.variant} colocacao`}>{props.ranking}</div>
                <div className="imagem-top3">
                    <div className="box-imagem-top3">
                        <img src={`${props.imagem}`} className="imagem-top3" />
                    </div>
                </div>
                <div className="text-img-top3">
                    <CardPrimary texto={props.nome} size='h6' variant='purple' />
                    <CardPrimary texto={props.vendas} size='h6' variant='yellow' />

                </div>
            </div>
            <div className="date-top3"> {props.data.replaceAll('-', '/')} </div>
        </div>
    );
}
