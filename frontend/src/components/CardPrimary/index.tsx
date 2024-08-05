import React from 'react'
import './styles.css'

interface CardSecondaryProps {
    texto: string;
    size: "h5" | "h6" | "subtitle";
    border?: boolean;
    className?: string;
    variant: "yellow" | "purple" | "date";
}

export default function CardSecondary(props: CardSecondaryProps) {
    return (
        <div className={`card-primary ${props.variant} ${props.border ? 'border' : ''}`}>
            {
                props.size === 'h5' ? <h5 className={`text-h5  ${props.className}`}>{props.texto}</h5> :
                    props.size === 'h6' ? <h6 className={`text-h6 ${props.className}`}>{props.texto}</h6> :
                        <span className={`text-subtitle ${props.className}`}>{props.texto}</span>
            }
        </div >
    )
}   
