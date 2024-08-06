import React from 'react'
import SimonGamesImg from '../../assets/images/Logo.png'
import './styles.css'

export default function Home() {
    return (
        <div className='container-home' id="home">
            <div className='header-home'>
                <div className='items-left'>
                    <img src={SimonGamesImg} alt="" />
                </div>
                <div className='items-right'>
                    <h3>
                        <a href='#catalogo'> Catalogo </a>
                    </h3>
                    <h3>
                        <a href='#top3'> Top 3 </a>
                    </h3>
                    <h3>
                        <a href='#sobre_nos'> Sobre nós </a>
                    </h3>
                </div>
            </div>
        </div >
    )
}
