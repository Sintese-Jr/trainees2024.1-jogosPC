import React from 'react'
import './styles.css'

interface CardPrimaryProps {
    texto: string;
    size: "h5" | "h6" | "subtitle";
}

export default function CardPrimary(props: CardPrimaryProps) {
    return (
        <div className='card-primary'>
            {
                props.size === 'h5' ? <h5 className='texto-card'>{props.texto}</h5> :
                    props.size === 'h6' ? <h6 className='texto-card'>{props.texto}</h6> :
                        <span className='texto-card'>{props.texto}</span>
            }
        </div>
    )
}
