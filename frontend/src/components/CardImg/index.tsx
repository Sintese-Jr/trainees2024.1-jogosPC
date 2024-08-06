import React from 'react'
import CardPrimary from '../CardPrimary/index.tsx';
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
                <CardPrimary texto={`${props.ranking.toString()}º`} size='h6' border variant='purple' />
            </div>
            <div className='imagem'>
                <div className="box-imagem">
                    <img src={`${props.imagem}`} className='imagem' />
                </div>
            </div>
            <div className='text-img'>
                <CardPrimary texto={props.nome} size='h6' variant='purple' />
            </div>
        </div>
    )
}
