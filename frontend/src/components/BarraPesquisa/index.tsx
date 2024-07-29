import React from 'react'
import './styles.css'

interface BarraPesquisa {
    titulo: string
}

export default function BarraPesquisa(props: BarraPesquisa) {
    return (
        <div className='container'>

            <div className='teste'>
                <img src="frontend/src/assets/images/barra-pesquisa.png"/>
            <h2 className='titulo'>Barra de pesquisa</h2>
            </div>

            
        </div>
    )
}
    