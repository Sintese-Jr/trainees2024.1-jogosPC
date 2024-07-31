import React from 'react'
import './styles.css'

interface PaginaCatalogoProps {
    children: React.ReactNode
}

export default function PaginaCatalogo(props: PaginaCatalogoProps) {
    return (
        <div className='pagina-catalogo'>
            {props.children}
        </div>
    )
}
