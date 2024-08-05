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
                onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                        props.setPesquisa(event as unknown as React.ChangeEvent<HTMLInputElement>)
                    }
                }
                }
                onBlur={(event) => {
                    props.setPesquisa(event as unknown as React.ChangeEvent<HTMLInputElement>)
                }
                }
                onInput={(event) => {
                    const input = event.target as HTMLInputElement;
                    if (input.value === '') {
                        props.setPesquisa(event as unknown as React.ChangeEvent<HTMLInputElement>);
                    }
                }}
            />
        </div>
    )
}
