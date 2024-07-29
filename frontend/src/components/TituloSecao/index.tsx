import React from 'react'
import './styles.css'

interface TituloSecaoProps {
    titulo: string
}

export default function TituloSecao(props: TituloSecaoProps) {
    return (
        <div className='tituloSecao'>
            <h2>{props.titulo}</h2>
        </div>
    )
}
