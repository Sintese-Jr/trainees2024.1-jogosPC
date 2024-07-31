import React from 'react'
import './styles.css'

interface TituloSecaoProps {
    titulo: string
}

export default function TituloSecao(props: TituloSecaoProps) {
    return (
        <div className='tituloSecao'>
            <h1 className='titulo'>{props.titulo}</h1>
        </div>
    )
}
