import React from 'react'
import CardSecondary from '../CardSecondary/index.tsx';
import './styles.css'

interface CardImgProps {
    imagem: string;
    nome: string;
    ranking: number;
}

export default function CardImg(props: CardImgProps) {
    return (
        <div className='card-img'>
            <div className='colocacao'>
                <CardSecondary texto={props.ranking.toString()} size='h5' border />
            </div>
            <div className='imagem'>
                <img src="https://t2.tudocdn.net/605594?w=1920" className='imagem' />
            </div>
            <div className='text-img'>
                <CardSecondary texto={props.nome} size='h6' />
            </div>
        </div>
    )
}
