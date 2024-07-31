import React from 'react';
import './styles.css'

interface BarraPesquisaProps {
    setPesquisa: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BarraPesquisa(props: BarraPesquisaProps) {
    return (
        <div className='container-pesquisa'>
            <input
                type="search"
                placeholder='Pesquisar'
                className='barra-pesquisa'
                onChange={props.setPesquisa}
            />
        </div>
    )
}
