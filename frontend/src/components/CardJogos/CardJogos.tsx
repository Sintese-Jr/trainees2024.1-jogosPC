import React from "react";
import './styles.css';

interface CardJogosProps {
    id: number;
    ranking: number;
    imagem: string;
    nome: string;
    empresa: string;
    total_vendas: number;
    desenvolvedora: string;
    publisher: string;
    genero: Array<string>
    lancamento: string;
}

export default function CardJogos(props: CardJogosProps) {
    return (
        <div >


        </div>
    )
}
